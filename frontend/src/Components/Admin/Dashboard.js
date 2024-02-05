// AdminDashboard.js
import React, { useEffect ,useState  } from 'react';
import '../Login/Login.css'
import './Dasboard.css'
// import Admincard from './Admincard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [add , setAdd] = useState(false)
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        image: null,
    });
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setProductData({ ...productData, image: file });
    };

    const handleFormSubmit = async () => {
        // event.preventDefault();

        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('stock', productData.stock);
        formData.append('price', productData.price);
        formData.append('image', productData.image);
        console.log('first gjhgj' , formData)

        try {
            const response = await axios.post('http://localhost:6080/products', formData);
            console.log('product res',response.status)

            if (response.status===201) {
                console.log('Product added successfully');
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Error adding product:', error.message);
            navigate('/Login');
        }
    };
    

    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:6080/adminproducts');
            // console.log('response of adsmin' , response)
          
            if (response.status === 200) {
            const data =  response.data;
            // console.log('data of admin' , data)
            setProducts(data);
          } else {
            console.error('Error fetching products');
          }
        } catch (error) {
          console.error('Error fetching products:', error.message);
         
        }
      };
      
      fetchProducts();
    }, [navigate , productData]);

    return (
        <div className='dashboard'>
        {add && 
            <div className='dashboard-right'>
            <div className='hero-head new'>
                <h1>Adding the Product</h1>
            </div>
            <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
              
                <div className='hero-input new'>
                    <div className='email-content'>
                        <div className='mailbox'>
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={productData.name}
                                onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className='hero-input'>
                    <div className='email-content'>
                        <div className='mailbox'>
                            <input
                                type="text"
                                placeholder="Product Description"
                                value={productData.description}
                                onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className='hero-input'>
                    <div className='email-content'>
                        <div className='mailbox'>
                            <label >Stock:</label>
                            <input
                                type="number"
                                placeholder="Product Stock"
                                value={productData.stock}
                                onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className='hero-input'>
                    <div className='email-content'>
                        <div className='mailbox'>
                            <label >Price:</label>
                            <input
                                type="number"
                                placeholder="Product price in dollar"
                                value={productData.price}
                                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className='hero-input'>
                    <div className='email-content'>
                        <div className='mailbox'>
                            <label >Product Image:</label>
                            <input type="file" accept="image" name="image" onChange={handleFileChange} />

                        </div>
                    </div>
                </div>
                <button className='submitbtn' type="submit" onClick={()=>setAdd(false)}>Add Product</button>
            </form>
        </div>}
     <div className='dashboard-left'>
     {!add && <button className='submitbtn' type="submit" onClick={()=>setAdd(true)}>Add Product</button>}
     {/* {products.map((product) => ( 
        <Admincard
          key={product._id}
          name={product.name}
          // description={product.description}
          price={product.price}
          stock={product.stock}
          image={`http://localhost:6080/${product.image}`}
        />
      ))} */}


         

<table>
          <tr>
            <th></th>
            <th >Name of Product</th>
            <th>Prices </th>
            <th>Stocks</th>
            <th>Edit</th>
            <th>Delete</th>
            
          </tr>

          {products.map((product) => (
            <tr  key={product._id}>
              <td className='linkto' > 
              {/* onClick={() => handleClick(item)} */}
              <img className='tableimg' src={`http://localhost:6080/${product.image}`} alt='ttt'></img>
              </td>
              <td >
              {product.name}
              </td>
              <td>
                {product.price}
              </td>
              <td>
                {product.stock}
              </td>
              <td className='linkto' >
              {/* onClick={() => handleUpdate(item)} */}
                Edit
              </td>
              <td className='linkto' >
              {/* onClick={() => handleDelete(item)} */}
                Delete
              </td>

            </tr>
          ))}

        </table>
     </div>
        </div>
    );
};

export default Dashboard;

