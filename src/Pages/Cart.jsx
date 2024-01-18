import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, updateCart } from '../Store/ActionCreators/CartActioncreator'
import { data } from 'autoprefixer'
import { useNavigate } from 'react-router'


export default function Cart() {
  let carts = useSelector((state) => state.CartStateData)
  let [cart, setcart] = useState([])
  let [total, settotal] = useState(0)
  let [shipping,setshipping]=useState(0)
  let [final,setfinal]=useState(0)
  let dispatch = useDispatch()
  let navigate=useNavigate()

  async function getAPIData() {
   await dispatch(getCart())
    let data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
    // console.log(carts)
    let newtotal = data.reduce((acc, item) => acc + item.total, 0)
    let newshipping = total > 0 && total < 1000 ? 150 : 0
    console.log(newshipping)
    settotal(newtotal)
    setshipping(newshipping)
    setfinal(newshipping+newtotal)
    setcart(data)
    console.log("carts",data);
  }
  function updateqty(result, id) {
    var item = cart.find((item) => item.id === id)
    if (result === "dec" && item.qty == 1) {
      return
    }
        else if (result === "dec") {
            item.qty = item.qty - 1
            item.total = item.total - item.price
        }
        else {
            item.qty = item.qty + 1
            item.total = item.total + item.price
        }
        dispatch(updateCart(item))
      
  }
 async function removeitem(id) {
    await dispatch(deleteCart({ id: id }))
    // getAPIData()
  }
 
  useEffect(() => {
    getAPIData()

  },[carts.length])
  return (
    <>
        <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Cart</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>

		

		<div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" >
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                    {
                      cart.map((item, index) => {
                        return (
                          <tbody key={index}>
                        <tr>
                          <td className="product-thumbnail">
                                <img src={`./assets/productimages/${item.pic}`} alt="Image" className="img-fluid"/>
                          </td>
                          <td className="product-name">
                                <h2 className="h5 text-black">{item.name }</h2>
                          </td>
                              <td>{item.price }</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{"maxWidth": "120px"}}>
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button" onClick={()=>{updateqty("dec",item.id)}}>&minus;</button>
                              </div>
                              <input type="text" className="form-control text-center quantity-amount"  placeholder="" aria-label="Example text with button addon" value={item.qty} onChange={(e)=>updateqty(e.target.value)} aria-describedby="button-addon1"/>
                              <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button" onClick={()=>updateqty("inc",item.id)}>+</button>
                              </div>
                            </div>
        
                          </td>
                              <td>{item.price*item.qty }</td>
                              <td><button onClick={() =>removeitem(item.id)} className="btn btn-black btn-sm">X</button></td>
                        </tr>
        
                        
                      </tbody>
                        )
                      })    
                    }
                    </table>
                  </div>
                </form>
              </div>
        
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" htmlFor="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">total</span>
                        </div>
                        <div className="col-md-6 text-right">
                      <strong className="text-black">{ total}</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Shipping</span>
                        </div>
                        <div className="col-md-6 text-right">
                      <strong className="text-black">{ shipping}</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Final</span>
                        </div>
                        <div className="col-md-6 text-right">
                      <strong className="text-black">{ final}</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block" onClick={() => { navigate("/checkout")}} >Proceed To Checkout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
