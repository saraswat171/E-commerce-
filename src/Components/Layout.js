import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import TeaCollections from '../Pages/TeaCollections'
import Accessories from '../Pages/Accessories';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Register from './register/Register.js'
import Login from './Login/Login.js';


function Layout() {
  return (
   <Router>
    <Navbar/>
   <Routes>
   <Route path='/TeaCollections' Component={TeaCollections} />
    <Route path='/Accessories' Component={Accessories} />
    <Route path='/Blog' Component={Blog} />
    <Route path='/Contact' Component={Contact} />
    <Route path='/Login' Component={Login} />
    <Route path='/Register' Component={Register} />
   </Routes>
   </Router>
  )
}

export default Layout