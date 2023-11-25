import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {  getSubcategory, updateSubcategory } from '../Store/ActionCreators/SubcategoryActioncreator';
// import { } from '../Store/Constant';


export default function AdminUpdateSubcategory() {
  let [name, setName] = useState("")
  let {id} =useParams()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  let subcategory=useSelector((state)=>state.SubcategoryStateData)
  function getData(e) {
    setName(e.target.value)
  }
  function postData(e) {
    e.preventDefault()
    // console.log(subcategory)
    var item = subcategory.find((item) =>item.name === name )
    // console.log(item)
    if (item) {
      alert("item already exits")
    }
    else {
      dispatch(updateSubcategory({id:id,name:name}))
      navigate("/admin-subcategory")
    }
  }
  useEffect(() => {
    dispatch(getSubcategory())
        var item = subcategory.find((item)=>item.id===Number(id))
        setName(item.name)
  },[])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Subcategory </h2></div>
      <form onSubmit={postData}>
 
  <div className="mb-3 p-2">
    <input type="text" className="form-control" id="add" onChange={getData} placeholder='Enter Subcategory' value={name} />
  </div>
  
  <button type="submit" className="btn btn-primary w-100 px-2">Submit</button>
</form>
        </div>
              </div>
    </>
  )
}
