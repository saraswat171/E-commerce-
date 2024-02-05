const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users')
const multer = require('multer');
const ProductModel = require('./models/Products')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');

//  const storage = multer.uploads();
const app = express()
app.use(express.text())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use('/uploads', express.static('uploads'))
const upload = multer({ dest: './uploads' })
app.use(cookieParser());
const url = "mongodb+srv://chetan1150:Ez9bVfwafkBCcG8x@cluster0.hzawyqo.mongodb.net/?retryWrites=true&w=majority"

try {
  mongoose.connect(url);
  console.log("connected to mongodb")
}
catch (error) {
  console.error(error);
}

// middleware
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.locals.isAuthenticated = false;
    return res.status(401).json("Not authorised");
  }

  jwt.verify(token, 'jwt-key', (err, user) => {
    if (err) {
      res.locals.isAuthenticated = false;
      return res.status(403).json('Forbidden');
    }
    req.user = user;
    console.log('user infor jwt is ', req.user);
    res.locals.isAuthenticated = true;
    next();
  });
};



app.post('/usersinfo', async (req, res) => {
  const { name, email, password, role } = req.body;
  // console.log(req.body.role)
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await UsersModel.findOne({ email })

    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json("Email already exist");
    }
    const newuser = await UsersModel.create({ name, email, password: hashedPassword, role });
    console.log('newuser', newuser)
    res.status(200).json(newuser)
  }


  catch (err) { res.status(500).json(err) }

})


app.post('/logininfo', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UsersModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ ID: user._id }, 'jwt-key');
      res.cookie('token', token, { httpOnly: true });

      res.json(user.role)
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/products', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    if (res.locals.isAuthenticated) {
      const userId = req.user.ID;
      const user = await UsersModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      try {
        const { name, description, stock, price } = req.body;
        console.log("path to " , req.file.path)
        const image = req.file.path; 

        // Store the product in the database (MongoDB)
        const newProduct = new ProductModel({
          name,
          description,
          stock,
          price,
          image,
          admin: userId,
        });

        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }

    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/products', authenticateJWT, async (req, res) => {
  try {
    if (res.locals.isAuthenticated) {
      const userId = req.user.ID;
      const user = await UsersModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      try {

        const product = await ProductModel.find();

        res.json(product);
   
      } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      // res.json(user);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/adminproducts', authenticateJWT, async (req, res) => {
  try {
    if (res.locals.isAuthenticated) {
      const userId = req.user.ID;
    let query ={};
      const user = await UsersModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      query.admin=userId;
      try {

        const product = await ProductModel.find(query);

        res.json(product);
   
      } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      // res.json(user);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/logout',authenticateJWT, (req, res) => {
  console.log(res.locals.isAuthenticated)
  if (res.locals.isAuthenticated) {
      res.clearCookie('token');
      res.json({ success: true, message: 'Logout successful' });
  } else {
      res.json({ success: false, message: 'Not logged in' });
  }
});



app.listen(6080, () => {
  console.log('server at port 6080')
})