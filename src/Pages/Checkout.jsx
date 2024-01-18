import BuyersProfile from './BuyersProfile'
import React, { useEffect, useState } from 'react'
import { deleteCart, getCart, updateCart } from '../Store/ActionCreators/CartActioncreator'
import { addCheckout } from '../Store/ActionCreators/CheckoutActioncreator'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Checkout() {
    let carts = useSelector((state) => state.CartStateData)
    let checkouts = useSelector((state) => state.CheckoutStateData)
  let [cart, setcart] = useState([])
  let  [mode,setmode]=useState("COD")
    let [total, settotal] = useState(0)
    let [shipping,setshipping]=useState(0)
    let [final,setfinal]=useState(0)
  let dispatch = useDispatch()
  let navigate=useNavigate()
  async function getData(e) {
    console.log(e.target.value)
    setmode(e.target.value)
  }
  async function placeOrder(){
    var item = {
        userid:localStorage.getItem("userid"),
        paymentmode:mode,
        orderstatus:"Order Placed",
        paymentstatus:"Pending",
        time:new Date(),
        totalAmount:total,
        shippingAmount:shipping,
        finalAmount:final,
        products:cart
    }
    await dispatch(addCheckout(item))
    for (let item of cart) {
      dispatch(deleteCart({id: item.id}))
    }
    navigate("/confirmation")
}
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
    useEffect(() => {
        getAPIData()
    
      },[carts.length,])
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-sm-12">
                  <div className="my-5 w-75 bg-light p-2"> <h2 className='text-center lg'>Buyers Profile </h2></div>
                <BuyersProfile />
                      
          </div>
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="row">
              <form className="col-md-12" >
              <div className=" col-sm-12 text-right bg-light border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart</h3>
                        </div>
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                    {
                      cart.map((item, index) => {
                        return (
                          <tbody key={index}>
                        <tr>
                          <td className="product-thumbnail">
                                <img src={`./assets/productimages/${item.pic}`} alt="Image" className="img-fluid" height={"55%"}/>
                          </td>
                          <td className="product-name">
                                <h2 className="h6 text-black">{item.name }</h2>
                          </td>
                              <td>{item.price }</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{"maxWidth": "120px"}}>
                              
                              <input type="text" className="form-control text-center quantity-amount"  placeholder="" aria-label="Example text with button addon" value={item.qty} onChange={(e)=>updateqty(e.target.value)} aria-describedby="button-addon1"/>
                              
                            </div>
        
                          </td>
                              <td>{item.price*item.qty }</td>
                             
                        </tr>
        
                        
                      </tbody>
                        )
                      })    
                    }
                    </table>
                  </div>
                </form>
              </div>
          <div className="bg-light row pt-4">
                  <div className="col-md-6 col-sm-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      
                      <div className="row mb-3">
                        <div className="col-md-6 col-sm-12">
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
                  </div>
                  <div className="mt-5 row bg-light pt-4">
                  <div className="col-md-6 col-sm-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Payment Method</h3>
                                </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio my-2">
                                                <label><input type="radio" onClick={getData} name="mode" class="mr-2" value="NetBanking" /> Net Banking/Card/UPI</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio my-2">
                                                <label><input type="radio" onClick={getData} name="mode" class="mr-2" value="COD" checked /> Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p><button class="btn btn-primary w-100" onClick={placeOrder} >Place an order</button></p>
            </div>
            </div>
              </div>
          </div>
    </>
  )
}
