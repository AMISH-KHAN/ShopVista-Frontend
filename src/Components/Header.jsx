import React from 'react'
import {Link, useNavigate} from"react-router-dom"


export default function Header() {
  let navigate=useNavigate()
  function logout() {
    navigate("/login")
    localStorage.clear()
    }
  return (
    <>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">
    <Link className="navbar-brand" to="/">ShopVista<span>.</span></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item ">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
            <li><Link className="nav-link" to="/about">About us</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>
            <li><Link className="nav-link" to="/blog">Blog</Link></li>
            <li><Link className="nav-link" to="/contact">Contact us</Link></li>
            <li><Link className="nav-link" to="/admin-home">Admin</Link></li>
        </ul>

    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              {localStorage.getItem("name") ?
              <div className="dropdown">
                <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {localStorage.getItem("name")}
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/profile">profile</Link></li>
                  <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                  <li><Link className="dropdown-item" onClick={logout}>logout</Link></li>
                </ul>
              </div>:<li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
}
            <li><Link className="nav-link" to="/cart"><img src="/public/assets/images/cart.svg"/></Link></li>
        </ul>
    </div>
</div>
    
</nav>
    </>
  )
}
