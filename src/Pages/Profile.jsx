import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Store/ActionCreators/UserActioncreator'
import { getCheckout } from '../Store/ActionCreators/CheckoutActioncreator'

import { useNavigate } from 'react-router'
import { deleteWishlist, getWishlist } from '../Store/ActionCreators/WishlistActioncreator'
import BuyersProfile from './BuyersProfile'

export default function Profile() {
  let navigate=useNavigate()
  let [user,setUser]=useState({})
  let [wishlist, setwishlist] = useState([])
  let [orders,setorders]=useState([])
  let users = useSelector((state) => state.UserStateData)
  let wishlists=useSelector((state)=>state.WishlistStateData)
  let checkout=useSelector((state)=>state.CheckoutStateData)
  let dispatch = useDispatch()

  
  async function getdata() {
    await dispatch(getWishlist())
    dispatch(getCheckout())
    let data =await wishlists.filter((item) => item.userid === localStorage.getItem("userid"))
    if (data)
        setwishlist(data)
    if (!user.id) {
      dispatch(getUser())
       data =await users.find((item) => item.id === Number(localStorage.getItem("userid")))
      if(data)
        setUser(data)
      

    }
    data = await checkout.filter((item) => item.userid === localStorage.getItem("userid"))
    if (data) {
      setorders(data)
    }
    // setwishlist(data)
    
  }
  async function removeitem(id) {
    await dispatch(deleteWishlist({ id: id }))
    await getdata()
  }
    useEffect(() => {
      getdata()
    }, [users.length,wishlists.length])
  return (
    <>
      
  <div className="container py-5">

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
                              <img src={`./assets/images/${user.pic}`} alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} /> 
                              <h5 className="my-3">{user.username}</h5>
           
              <button type="button" className="btn btn-primary " onClick={()=>{navigate(`/updateprofile/${user.id}`)}}>Update Profile</button>
          </div>
        </div>
       
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <BuyersProfile/>
              
        </div>
    
          </div>
          {/* end */}
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
                <h3 className='text-center'> WishList</h3>
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                    {
                      wishlist.map((item, index) => {
                        return (
                          <tbody key={index}>
                        <tr>
                          <td className="product-thumbnail">
                                <img src={`./assets/productimages/${item.pic}`} alt="Image" className="w-30" height={"90px"}/>
                          </td>
                          <td className="product-name">
                                <h2 className="h5 text-black">{item.name }</h2>
                          </td>
                              <td>{item.price }</td>
                              <td><button onClick={() =>removeitem(item.id)} className="btn btn-black btn-sm">X</button></td>
                        </tr>
        
                        
                      </tbody>
                        )
                      })    
                    }
                    </table>
                  </div>
               
          </div>
          <div className="col-12 col-lg-6 col-md-6">
                <h3 className='text-center'> order History</h3>
                  <div className="site-blocks-table">
                      
                    {
                      orders.map((item, index) => {
                        return (
                          <div className="row " key={index}>
                            <div className="col-lg-3">
                              <table className='mytable'>
                                <tbody>

                                <tr>
                                  <th>orderID</th>
                                  <td>{item.id}</td>
                                </tr>
                                <tr>
                                  <th>Payment Mode</th>
                                  <td>{item.paymentmode}</td>
                                </tr>
                                <tr>
                                  <th>Order Status</th>
                                  <td>{item.orderstatus}</td>
                                </tr>
                                <tr>
                                  <th>Date</th>
                                  <td>{item.time}</td>
                                </tr>
                                <tr>
                                  <th>Total Amount</th>
                                  <td>{item.totalAmount}</td>
                                </tr>
                                <tr>
                                  <th>Shipping Amount</th>
                                  <td>{item.shippingAmount}</td>
                                </tr>
                                <tr>
                                  <th>Final Amount</th>
                                  <td>{item.finalAmount}</td>
                                </tr>
                                <tr>
                                  <th>Product</th>
                                  <td><div className="col-lg-9">
                        <div className="table-responsive">
                <table className="mytable">
                    <thead className="thead-primary">
                        <tr className="text-center">
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.products.map((item, index) => {
                                return <tr key={index} className="text-center">
                                    <td className="image-prod"><img src={`assets/productimages/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                    <td className="product-name">{item.color}</td>
                                    <td className="product-name">{item.size}</td>
                                    <td className="price">&#8377;{item.price}</td>
                                    <td className="price">{item.qty}</td>
                                    <td className="price">&#8377;{item.total}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
                        </div></td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            
                            </div>
                        )
                      })    
                    }
                   
                  </div>
               
          </div>
        </div>
  </div>

    </>
  )
  }
