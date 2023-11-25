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
import Signup from './Pages/Signup'
import Adminhome from './Admin/Adminhome'
import Adminuser from './Admin/Adminuser'
import Adminbrand from './Admin/Adminbrand'
import Adminmaincategory from './Admin/Adminmaincategory'
import Login from './Pages/Login'
import Adminaddmaincategory from './Admin/Adminaddmaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import Adminsubcategory from './Admin/Adminsubcategory'
import Adminaddsubcategory from './Admin/Adminaddsubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import Adminaddbrand from './Admin/Adminaddbrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import Adminproduct from './Admin/Adminproduct'
import Adminaddproduct from './Admin/Adminaddproduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'


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
          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/admin-home' element={<Adminhome />} />
          
          <Route path='/admin-user' element={<Adminuser />} />
          
          <Route path='/admin-maincategory' element={ <Adminmaincategory/>} />
          <Route path='/admin-addmaincategory' element={ <Adminaddmaincategory/>} />
          <Route path='/admin-updatemaincategory/:id' element={<AdminUpdateMaincategory />} />
          
          <Route path='/admin-subcategory' element={ <Adminsubcategory/>} />
          <Route path='/admin-addsubcategory' element={ <Adminaddsubcategory/>} />
          <Route path='/admin-updatesubcategory/:id' element={<AdminUpdateSubcategory />} />
          
          <Route path='/admin-brand' element={ <Adminbrand/>} />
          <Route path='/admin-addbrand' element={ <Adminaddbrand/>} />
          <Route path='/admin-updatebrand/:id' element={ <AdminUpdateBrand/>} />
          
          <Route path='/admin-product' element={ <Adminproduct/>} />
          <Route path='/admin-addproduct' element={ <Adminaddproduct/>} />
          <Route path='/admin-updateproduct/:id' element={ <AdminUpdateProduct/>} />
      </Routes>
      
      </BrowserRouter>
      
      <Footer/>
    </>
  )
}

export default App
