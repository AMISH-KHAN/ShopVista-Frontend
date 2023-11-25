import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addBrand, getBrand } from '../Store/ActionCreators/BrandActioncreator';
// import { } from '../Store/Constant';


export default function Adminaddbrand() {
  let [name, setName] = useState()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  let brand=useSelector((state)=>state.BrandStateData)
  function getData(e) {
    setName(e.target.value)
  }
  function postData(e) {
    e.preventDefault()
    // console.log(brand)
    var item = brand.find((item) => {return item.name === name })
    // console.log(item)
    if (item) {
      alert("item already exits")
    }
    else {
      dispatch(addBrand({name:name}))
      navigate("/admin-brand")
    }
  }
  useEffect(() => {
    dispatch(getBrand())
  },[])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Brand </h2></div>
      <form onSubmit={postData}>
 
  <div className="mb-3 p-2">
    <input type="text" className="form-control" id="add" onChange={getData} placeholder='Enter Brand'/>
  </div>
  
  <button type="submit" className="btn btn-primary w-100 px-2">Submit</button>
</form>
        </div>
              </div>
    </>
  )
}
