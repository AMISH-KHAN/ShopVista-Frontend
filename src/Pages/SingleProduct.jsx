import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getProduct } from '../Store/ActionCreators/ProductActioncreator'
import { addCart, getCart } from '../Store/ActionCreators/CartActioncreator'
import { addWishlist, getWishlist } from '../Store/ActionCreators/WishlistActioncreator'
import { Link } from 'react-router-dom'
export default function SingleProduct() {
  let [singleproduct, setsingleproduct] = useState({})
  let [qty, setqty] = useState(1);
  // let [p,setp]=useState({})
  let dispatch = useDispatch()
  let navigate=useNavigate()
  const { id } = useParams()
  // function getqty(e) {
  //   let value = parseInt(e.target.value)
  //   console.log(value)
  //   setqty(value)
  // }
  let product = useSelector((state) => state.ProductStateData)
  let wishlist = useSelector((state) => state.WishlistStateData)
  let cart=useSelector((state)=>state.CartStateData)
  function addtocart() {
    let data=cart.find((item) => item.productid === singleproduct.id && item.userid === localStorage.getItem("userid"))
    if (data) {
      console.log(data)
      navigate("/cart")
    }
    else {
      var item = {
				productid: singleproduct.id,
				userid: localStorage.getItem("userid"),
				name: singleproduct.name,
				color: singleproduct.color,
				price:singleproduct.finalprice,
				qty: qty,
				total: singleproduct.finalprice * qty,
				pic: singleproduct.pic1
			}
			dispatch(addCart(item))
			navigate("/cart")
    }
  }
  function addtoWishlist() {
    let data=wishlist.find((item) => item.productid === singleproduct.id && item.userid === localStorage.getItem("userid"))
    if (data) {
      console.log(data)
      navigate("/profile")
    }
    else {
      var item = {
				productid: singleproduct.id,
				userid: localStorage.getItem("userid"),
				name: singleproduct.name,
				color: singleproduct.color,
				price:singleproduct.finalprice,
				pic: singleproduct.pic1
			}
			dispatch(addWishlist(item))
			navigate("/profile")
    }
  }
  useEffect(() => {
        dispatch(getProduct())
        let item = product.find((item) => item.id === Number(id))
        console.log(item)
      setsingleproduct(item)
      dispatch(getCart())
      dispatch(getWishlist())
    },[product.length])
  return (
      <>
          <div className="container">
          <div className="row">
                  <div className="col-12 col-md-5 mb-5 mb-lg-0 mt-5">
                  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`/assets/productimages/${singleproduct.pic1}`} className="d-block w-100" style={{height:"636px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={`/assets/productimages/${singleproduct.pic2}`} className="d-block w-100" style={{height:"636px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={`/assets/productimages/${singleproduct.pic3}`} className="d-block w-100" style={{height:"636px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={`/assets/productimages/${singleproduct.pic4}`} className="d-block w-100" style={{height:"636px"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                  </div>
                  <div className="col-12 col-md-7 my-5 product-details pl-md-5">
                
                            <h3 className='text-center'>{singleproduct.name}</h3>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Category</div>
                                <div className='border  p-3 w-50'>{singleproduct.maincategory}/{singleproduct.subcategory}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Brand</div>
                                <div className='border  p-3 w-50'>{singleproduct.brand}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Price</div>
                                <div className='border  p-3 w-50'><del>&#8377;{singleproduct.baseprice}</del><sup>&#8377;{singleproduct.finalprice}</sup> &nbsp;&nbsp;&nbsp;{singleproduct.discount}% Off</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Color</div>
                                <div className='border  p-3 w-50'>{singleproduct.color}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Size</div>
                                <div className='border  p-3 w-50'>{singleproduct.size}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Stock</div>
                                <div className='border  p-3 w-50'>{singleproduct.stock}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Description</div>
                                <div className='border  p-3 w-50'>{singleproduct.description}</div>
                      </div>
            <div class="d-flex flex-row my-5">
               <h4 className='mt-2'>quantity</h4>
            <div class="d-flex flex-row-reverse">
                <div className="container my-2 row ">
              <div className="col-3 ">

              <button className="plus" onClick={()=>{if(qty>0)setqty(qty-1)}}> <span class="material-symbols-outlined">
remove
</span></button>
              </div>
              <div className="col-3 quantity">
              <input type="text" name="qty" max={100} min={0} id="qty" value={qty} className="quantity" />
              </div>
              <div className="col-3 ">

              <button className="plus" onClick={()=>{setqty(qty+1)}}> <span class="material-symbols-outlined">
add
</span></button>
              </div>
           
                </div>
                </div>
              </div>
                            <div className='d-flex'>
                                <button  className="btn btn-black w-50 mr-2" onClick={addtocart}>Add to Cart</button>
                                <button className="btn btn-primary w-50" onClick={addtoWishlist}>Add to Wishlist</button>
                            </div>
            
                  </div>
                  
                  </div>
                  </div>
              
    </>
  )
}
