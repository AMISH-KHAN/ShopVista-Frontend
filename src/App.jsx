import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './Pages/Shop'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import Contactus from './Pages/Contactus'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/about' element={ <Aboutus />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/blog' element={ <Blog/>} />
          <Route path='/contact' element={ <Contactus/>} />
          <Route path='/cart' element={ <Cart/>} />
      </Routes>
      
      </BrowserRouter>
      
      <Footer/>
    </>
  )
}

export default App
