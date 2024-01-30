import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import TeaCollections from '../Pages/TeaCollections'
import Accessories from '../Pages/Accessories';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Register from './register/Register.js'
import Login from './Login/Login.js';
import AddtoCart from '../Pages/AddtoCart/AddtoCart.js';
import Dashboard from './Admin/Dashboard.js';
import Landing from '../Pages/Landing/Landing.js';


function Layout() {
  return (
   <Router>
    <Navbar/>
   <Routes>
    <Route path='/' Component={Landing} />
   <Route path='/TeaCollections' Component={TeaCollections} />
    <Route path='/Accessories' Component={Accessories} />
    <Route path='/Blog' Component={Blog} />
    <Route path='/Contact' Component={Contact} />
    <Route path='/Login' Component={Login} />
    <Route path='/Register' Component={Register} />
    <Route path='/AddtoCart' Component={AddtoCart} />
    <Route path='/Dashboard' Component={Dashboard} />
   </Routes>
   </Router>
  )
}

export default Layout