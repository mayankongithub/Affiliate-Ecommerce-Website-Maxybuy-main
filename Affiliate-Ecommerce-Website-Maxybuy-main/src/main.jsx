import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Pages/Home/home.jsx'
import Men from './Components/Pages/Men/men.jsx'
import Login from './Components/Pages/Login/login.jsx'
import SignUp from './Components/Pages/Login/signUp.jsx'
import Women from './Components/Pages/Women/women.jsx'
import Kids from './Components/Pages/kids/kids.jsx'
import About from './Components/Pages/About/about.jsx'
import ProductDetails from './Components/Pages/Product Details/productDetails.jsx'
import CartContainer from './Components/Pages/Cart Container/CartContainer.jsx'
 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='men' element={<Men />}/>
      <Route path='women' element={<Women />}/>
      <Route path='kids' element={<Kids />}/>
      <Route path='about' element={<About />}/>
      <Route path='productDetails' element={<ProductDetails />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signUp' element={<SignUp />}/>
      <Route path='cartContainer' element={<CartContainer />}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
