import './App.css'
import Components from './pages/components'
import Home from './pages/Home'
import Animation from './pages/Animation'
import Calculator from './pages/Calculator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForwardToHome from './pages/ForwardToHome'
import AppLayout from './layout/AppLayout'
import Todos from './pages/Todos'
import { use, useEffect, useState } from 'react'
import Cart from './pages/cart'
import Product from './pages/product'
import { fetchProduct } from './data/productData'
import Login from './pages/login'

function App() {
  
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')
  useEffect(()=>{
    setProduct(fetchProduct())
  },[])

  useEffect(()=>{
    console.log(product)
  },[product])

  if (token == ''){
    return <Login setToken={setToken} setRole={setRole}/>
  }else {
     return (
    
    <BrowserRouter basename='/csi205/'>
      <Routes>
        <Route element={<AppLayout product={product} cart={cart} setToken={setToken}/>}>
          <Route path='components' element={<Components />} />
          <Route path='home' element={<Home />} /> 
          <Route path='animation' element={<Animation />} /> 
          <Route path='calculator' element={<Calculator />} /> 
          <Route path='todos' element={<Todos/>} /> 
          <Route path='product' element={<Product product={product} cart={cart} setCart={setCart} />} /> 
          <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>} /> 
          <Route path='*' element={<ForwardToHome />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  )
  }
 
}

export default App
