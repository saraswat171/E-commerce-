// AdminDashboard.js
import React, { useEffect ,useState  } from 'react';
import '../Login/Login.css'
import './Dasboard.css'
import Admincard from './Admincard';
const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        image: null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setProductData({ ...productData, image: file });
    };

    const handleFormSubmit = async (event) => {
        // event.preventDefault();

        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('stock', productData.stock);
        formData.append('price', productData.price);
        formData.append('image', productData.image);

        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Product added successfully');
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };
    

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:8080/products');
          
          if (response.ok) {
            const data = await response.json();
            setProducts(data);
          } else {
            console.error('Error fetching products');
          }
        } catch (error) {
          console.error('Error fetching products:', error.message);
        }
      };
  
      fetchProducts();
    }, []);

    return (
        <div className='dashboard'>
            <div className='dashboard-right'>
            <div className='hero-head new'>
                <h1>Adding the Product</h1>
            </div>
            <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
              
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
                            <input type="file" accept="image/*" name="image" onChange={handleFileChange} />

                        </div>
                    </div>
                </div>
                <button className='submitbtn' type="submit">Add Product</button>
            </form>
        </div>
     <div className='dashboard-left'>
     {products.map((product) => ( 
        <Admincard
          key={product._id}
          name={product.name}
          // description={product.description}
          price={product.price}
          stock={product.stock}
          image={`http://localhost:8080/${product.image}`}
        />
      ))}
     </div>
        </div>
    );
};

export default Dashboard;

