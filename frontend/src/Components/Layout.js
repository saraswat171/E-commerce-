import React, { useEffect, useState } from 'react'
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
  
  const [Role,setRole]=useState(localStorage.getItem('User role'));
  
  useEffect(()=>{
   
    setRole(localStorage.getItem('User role'));
    console.log('my role is', Role );
  },[Role])

  const publicRouter = [
    {
      path: "/*",
      component: <Landing />
    },
    {
      path: "/Login",
      component: <Login />
    },
    {
      path: "/Register",
      component: <Register />
    }

  ]
const privateRoutes =[
  {
    path:'/TeaCollections',
    component:< TeaCollections/>
  },
  {
    path:'/Accessories',
    component:< Accessories/>
  },
  {
    path:'/Blog',
    component:< Blog/>
  },
  {
    path:'/Contact',
    component:< Contact/>
  }
]

const adminRouter =[
  {
    path:'/Dashboard',
    component: <Dashboard/>
  }
]

const customerRouter=[
  {
    path:'/AddtoCart',
    component:<AddtoCart/>
  }
]


  return (
   <Router>
    <Navbar/>
   <Routes>
   {!Role && publicRouter.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} />;
          })}
  {Role && privateRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} />;
          })}
    {/* <Route path='/' Component={Landing} /> */}
   {/* <Route path='/TeaCollections' Component={TeaCollections} />
    <Route path='/Accessories' Component={Accessories} />
    <Route path='/Blog' Component={Blog} />
    <Route path='/Contact' Component={Contact} /> */}
    {/* <Route path='/Login' Component={Login} /> */}
    {/* <Route path='/Register' Component={Register} /> */}
    {/* <Route path='/AddtoCart' Component={AddtoCart} /> */}
    {/* <Route path='/Dashboard' Component={Dashboard} /> */}
    {Role && (Role === 'User') && customerRouter.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} />;
          })}
    {Role && (Role === 'Admin') && adminRouter.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} />;
          })}
   </Routes>
   </Router>
  )
}

export default Layout