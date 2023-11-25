import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addProduct, getProduct } from '../Store/ActionCreators/ProductActioncreator';
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActioncreator';
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActioncreator';
import { getBrand } from '../Store/ActionCreators/BrandActioncreator';
// import { } from '../Store/Constant';


export default function Adminaddproduct() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  let product=useSelector((state)=>state.ProductStateData)
  let maincategory=useSelector((state)=>state.MaincategoryStateData)
  let subcategory=useSelector((state)=>state.SubcategoryStateData)
  let brand=useSelector((state)=>state.BrandStateData)
  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory:"",
    brand:"",
    stock: "in Stock",
    color: "",
    size: "",
    baseprice: 0,
    discount: 0,
    finalprice:0,
    discription: "",
    pic1:"",
    pic2:"",
    pic3:"",
    pic4:""
    
  })
  function getData(e) {
    setData((old) => {
      let name = e.target.name
      let value=e.target.value
      return {
        ...old,
        [name]:value
      }
    })
  }
  function getFile(e){
    let name = e.target.name
    let value = e.target.files[0].name
    // console.log(value)
    setData((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    // console.log(product)
    let mc = data.maincategory
    if (mc === "") {
      mc=maincategory[0].name
    }
    let sc = data.subcategory
    if (sc === "") {
      sc=subcategory[0].name
    }
    let br = data.brand
    if (br === "") {
      br=brand[0].name
    }
    let bp = parseInt(data.baseprice)
    let ds=parseInt(data.discount)
    let fp=parseInt(bp-bp*ds/100)
    let value = {
      name: data.name,
      maincategory:mc ,
      subcategory: sc,
      brand: br,
      stock: data.stock,
      color: data.color,
      size: data.size,
      baseprice: bp,
      discount: ds,
      finalprice: fp,
      discription: data.discription,
      pic1: data.pic1,
      pic2: data.pic2,
      pic3: data.pic3,
      pic4: data.pic4
  }
    
      dispatch(addProduct(value))
      navigate("/admin-product")
   
  }
  useEffect(() => {
    dispatch(getProduct())
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())
  },[])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-lg-2 col-md-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Product </h2></div>
      <form onSubmit={postData} className='needs-validation'>
              
  <div className="mb-3 p-2 col-lg-12 ">
              <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder='Enter Product' required />
              <div className="invalid-feedback">
       Name required
    </div>
            </div>
 
            <div className="row mb-3">
              <div className=" col-lg-3 col-md-6 col-12">
                <label htmlFor="maincategory">Maincategory</label>
              <select name='maincategory' className="form-select form-select-lg" aria-label="Default select example" onChange={getData}>
                  {maincategory.map((item, index)=>{
                    return <option value={item.name} key={index}>{ item.name}</option>
              })}
</select>
</div>
              <div className=" col-lg-3 col-md-6 col-12">
                <label htmlFor="subcategory">Subcategory</label>
              <select name='subcategory' className="form-select form-select-lg" aria-label="Default select example" onChange={getData}>
                  {subcategory.map((item,index) => {
                    return(<option value={item.name} key={index}>{ item.name}</option>)
                  }) }

</select>
</div>
              <div className=" col-lg-3 col-md-6 col-12">
                <label htmlFor="brand">Brand</label>
              <select name='brand' className="form-select form-select-lg" aria-label="Default select example" onChange={getData}>
                  {
                    brand.map((item, index) => {
                      return <option value={item.name} key={index} >{ item.name}</option>
                    })
                  }
</select>
</div>
              <div className=" col-lg-3 col-md-6 col-12">
                <label htmlFor="stock">Stock</label>
              <select name='stock' className="form-select form-select-lg" aria-label="Default select example" onChange={getData}>
  
  <option value="instock">In Stock</option>
  <option value="outstock">Out of Stock</option>
</select>
              </div>
              
              <div className="row mb-3">
              <div className='col-lg-6 col-12'>
                <label htmlFor="color">Color</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='color'   placeholder='Enter Color' onChange={getData} required />
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="size">Size</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='size'   placeholder='Enter Size' onChange={getData} required/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="baseprice">Base Price</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='baseprice'   placeholder='Enter Base Price' onChange={getData} required/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="discount">Discount</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='discount'   placeholder='Enter Discount' onChange={getData} />
                
    </div>
              </div> 
              <div className="mb-3">
  <label htmlFor="discription" className="form-label">Discription</label>
  <textarea className="form-control" id="discription" name='discription' rows="3" onChange={getData}></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 col-12">
                
  <label htmlFor="pic1" className="form-label">pic 1</label>
  <input className="form-control form-control-lg" id="pic1" type="file" name="pic1" onChange={getFile}/>

                </div>
                <div className="col-lg-6 col-12">
                
  <label htmlFor="pic2" className="form-label">pic 2</label>
  <input className="form-control form-control-lg" id="pic2" type="file" name="pic2" onChange={getFile}/>

                </div>
                <div className="col-lg-6 col-12">
                
  <label htmlFor="pic3" className="form-label">pic 3</label>
  <input className="form-control form-control-lg" id="pic3" type="file" name="pic3" onChange={getFile}/>

                </div>
                <div className="col-lg-6 col-12">
                
  <label htmlFor="pic4" className="form-label">pic 4</label>
  <input className="form-control form-control-lg" id="pic4" type="file" name="pic4" onChange={getFile}/>

                </div>
          </div>
    </div>
    
  
  <button type="submit" className="btn btn-primary w-100 px-2">Submit</button>
</form>
        </div>
              </div>
    </>
  )
}
