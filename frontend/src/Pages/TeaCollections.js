

import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card'
import './TeaCollections.css'

const TeaCollection = () => {
  const [products, setProducts] = useState([]);

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
    <div className='teacollections'>
      {products.map((product) => (
        <Card
          key={product._id}
          name={product.name}
           description={product.description}
          price={product.price}
          image={`http://localhost:8080/${product.image}`}
        />
      ))}
    </div>
  );
};

export default TeaCollection;
