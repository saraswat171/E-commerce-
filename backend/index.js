const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users')
const multer = require('multer');
const ProductModel = require('./models/Products')

//  const storage = multer.uploads();
const app = express()
app.use(express.text())
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors())
app.use('/uploads' , express.static('uploads'))
const upload = multer({ dest: './uploads' })

const url = "mongodb+srv://chetan1150:Ez9bVfwafkBCcG8x@cluster0.hzawyqo.mongodb.net/?retryWrites=true&w=majority"

try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}

app.post('/usersinfo', async (req, res) => {
    const { name, email, password ,role } = req.body;
    // console.log(req.body.role)
    
    try {
        const existingUser = await UsersModel.findOne({ email })

        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json("Email already exist");
        }
        const newuser = await UsersModel.create({ name, email, password,role })
        console.log('newuser', newuser)
        res.status(200).json(newuser)
    }


    catch (err) { res.status(500).json(err) }
  
})

app.post('/logininfo', async (req, res) => {
    const { email, password } = req.body;
    console.log("req.body", req.body);
    await UsersModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    
                    res.json(user.role)
                }
                else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("no record existed")
            }
        })
})


app.post('/products', upload.single('image'), async (req, res) => {
    try {
      const { name, description, stock, price } = req.body;
      const image = req.file.path; // Assuming the image is uploaded as a file
  
      // Store the product in the database (MongoDB)
      const newProduct = new ProductModel({
        name,
        description,
        stock,
        price,
        image,
      });
  
      await newProduct.save();
  
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error('Error adding product:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.get('/products', async (req, res) => {
    try {
       
      const product = await ProductModel.find();
     
      res.json(product);
    } catch (error) {
      console.error('Error fetching products:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
  });


app.listen(8080, () => {
    console.log('server at port 8080')
})