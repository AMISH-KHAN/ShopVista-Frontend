import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { deleteCheckout, getCheckout, updateCheckout } from '../Store/ActionCreators/CheckoutActioncreator'
import Leftnav from './Leftnav'
import { getUser } from '../Store/ActionCreators/UserActioncreator'

export default function AdminSingleCheckout() {
    let { id } = useParams()
    let [user,setuser]=useState({})
    let [data, setdata] = useState({})
    let [order, setorder] = useState("")
    let [payment,setpayment]=useState("")
    let checkouts = useSelector((state) => state.CheckoutStateData)
    let users=useSelector((state)=>state.UserStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    function getData(e) {
        
        if (e.target.name === "orderStatus") {
            setorder(e.target.value)
            console.log(e.target.value)
        }
        else if(e.target.name==="paymentStatus") {
            setpayment(e.target.value)
        }
        
    }
    function update() {
        console.log(order,payment)
        dispatch(updateCheckout({ ...data, orderstatus: order, paymentstatus: payment }))
        setdata((old)=> {
            return {
                ...old,
                ["orderstatus"]:order,
                ["paymentstatus"]:payment
          }  
        })
    data.products.map((item)=>(console.log(item)))

        }
    async function getAPIData() {
        dispatch(getCheckout())
        dispatch(getUser())
        let d =await checkouts.find((item) => item.id === Number(id))
        // console.log(checkouts)
        if (d) {
            setdata(d)
            setorder(d.orderstatus)
            setpayment(d.paymentstatus)
            let userdata = await users.find((item) => item.id === Number(localStorage.getItem("userid")))
            console.log(userdata)
            if (userdata) {
                setuser(userdata)
            }
        }
    }
     
    useEffect(() => {
        getAPIData()
    },[checkouts.length,users.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row my-4">
                <div className="col-md-2 col-12 mb-3">
            <Leftnav/>
                    </div>
                    <div className="col-md-10 col-sm-12 ">
                        <h5 className='bg-secondary text-center text-light p-1'>Single Checkout </h5>
                        <div className="table-responsive mt-4">
            <table className="table w-100" style={{height:"10%"}}>
              
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                                        <td>{ data.id}</td>
                                    </tr>
                                    <tr>
                                        <th>User</th>
                                        <td>
                                        <table cellPadding="10px">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>
                                                <ul style={{ listStyleType: 'none' }}>
                                                    <li>{user.addressline1}</li>
                                                    <li>{user.addressline2}</li>
                                                    <li>{user.addressline3}</li>
                                                    <li>{user.pin}</li>
                                                    <li>{user.city}</li>
                                                    <li>{user.state}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                        </td>
                                    </tr>
                <tr>
                  <th scope="row">Payment Mode</th>
                  <td>{data.paymentmode}</td>
                </tr>
                <tr>
                  <th scope="row">Order Status</th>
                                        <td>
                                            {data.orderstatus}
                                            {data.orderstatus!=="Delivered"?
                                            <select class="form-select w-50" name='orderStatus' aria-label="Default select example" onChange={getData}>
                                            <option  value="Order Placed">Order Placed</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                                </select>
                                                :""}
                                        </td>
                </tr>
                <tr>
                      <th scope="row">Payment Status</th>
                                        <td>
                                            {data.paymentstatus}
                                            {data.paymentstatus !== "Done" ?
                                            <select class="form-select w-50" name='paymentStatus' aria-label="Default select example" onChange={getData}>
                                                <option value="pending" >Pending</option>
                                            <option value="Done">Done</option>
                                            </select>
                                            
                                            : ""}
                                        </td>
                </tr>
               
                <tr>
                      <th scope="row">time</th>
                                        <td className='text-break'><p>{ data.time}</p></td>
                </tr>
                <tr>
                      <th scope="row">Total Amount</th>
                                        <td >{ data.totalAmount}</td>
                </tr>
                <tr>
                      <th scope="row">Shipping Amount</th>
                                        <td >{ data.shippingAmount}</td>
                </tr>
                <tr>
                      <th scope="row">Final Amount</th>
                                        <td >{ data.finalAmount}</td>
                                    </tr>
                                    

                                    
              </tbody>
            </table>
                        <button className="btn btn-primary w-100" onClick={update}>Update</button>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">

                        <div className="overflow-x-auto">
                <table className="mytable w-100">
                    <thead className="thead-primary">
                        <tr className='mx-3'>
                            <th  className='mx-3'>Product</th>
                            <th  className='mx-3'>Color</th>
                            <th  className='mx-3'>Size</th>
                            <th  className='mx-3'>Price</th>
                            <th  className='mx-3'>Qty</th>
                            <th  className='mx-3'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.products && data.products.map((item, index) => {
                                return <tr  className='mx-3' key={index} >
                                    <td   className=" mx-3 image-prod"><img src={`/assets/productimages/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                    <td  className=" mx-3 product-name">{item.color}</td>
                                    <td  className=" mx-3 product-name">{item.size}</td>
                                    <td  className=" mx-3 price">&#8377;{item.price}</td>
                                    <td  className=" mx-3 price">{item.qty}</td>
                                    <td  className=" mx-3 price">&#8377;{item.total}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
                            </div>
                       </div>
                        </div>
                    </div>
                </div>
        
      
    </>
  )
}
