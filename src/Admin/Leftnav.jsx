import React from 'react'
import { Link } from 'react-router-dom'

export default function Leftnav() {
  return (
    <>
     <div className="list-group">
  <Link to="/admin-home" className="list-group-item list-group-item-action " aria-current="true">
    Home
  </Link>
  <Link to="/admin-user" className="list-group-item list-group-item-action">User</Link>
  <Link to="/admin-maincategory" className="list-group-item list-group-item-action">Maincategories</Link>
  <Link to="/admin-subcategory" className="list-group-item list-group-item-action">Subcategories</Link>
  <Link to="/admin-brand" className="list-group-item list-group-item-action">Brands</Link>
  <Link to="/admin-product" className="list-group-item list-group-item-action">Products</Link>
  <Link to="/admin-contactus" className="list-group-item list-group-item-action">Contact Us</Link>
  <Link to="/admin-newsletter" className="list-group-item list-group-item-action">Newsletters</Link>
  <Link to="/admin-checkouts" className="list-group-item list-group-item-action">Checkouts</Link>
</div>
    </>
  )
}
