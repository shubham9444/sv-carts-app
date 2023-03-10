import React from 'react'
import './style/app.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
}

export default App
