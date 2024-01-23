import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import TeaCollections from '../Pages/TeaCollections'
import Accessories from '../Pages/Accessories';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';


function Layout() {
  return (
   <Router>
    <Navbar/>
   <Routes>
   <Route path='/TeaCollections' Component={TeaCollections} />
    <Route path='/Accessories' Component={Accessories} />
    <Route path='/Blog' Component={Blog} />
    <Route path='/Contact' Component={Contact} />
   </Routes>
   </Router>
  )
}

export default Layout