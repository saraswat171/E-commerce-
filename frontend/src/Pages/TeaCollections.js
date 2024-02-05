

import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card'
import './TeaCollections.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const TeaCollection = () => {
  const [products, setProducts] = useState([]);
  const navigate =useNavigate();
  axios.defaults.withCredentials=true;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:6080/products');
        if (response.status === 200) {
          const data = response.data;
          setProducts(data);
        } else {
          console.error('Error fetching products');
        }
      } catch (error) {
        console.error('Error fetching products:', error.message);
        navigate('/Login');
      }
    };
    

    fetchProducts();
  }, [navigate]);

  return (
    <div className='teacollections'>
      {products.map((product) => (
        <Card
          key={product._id}
          name={product.name}
           description={product.description}
          price={product.price}
          image={`http://localhost:6080/${product.image}`}
        />
      ))}
    </div>
  );
};

export default TeaCollection;
