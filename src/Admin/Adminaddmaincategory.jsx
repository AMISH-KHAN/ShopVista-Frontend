import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addMaincategory, getMaincategory } from '../Store/ActionCreators/MaincategoryActioncreator';
// import { } from '../Store/Constant';


export default function Adminaddmaincategory() {
  let [name, setName] = useState()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  let maincategory=useSelector((state)=>state.MaincategoryStateData)
  function getData(e) {
    setName(e.target.value)
  }
  function postData(e) {
    e.preventDefault()
    // console.log(maincategory)
    var item = maincategory.find((item) => {return item.name === name })
    // console.log(item)
    if (item) {
      alert("item already exits")
    }
    else {
      dispatch(addMaincategory({name:name}))
      navigate("/admin-maincategory")
    }
  }
  useEffect(() => {
    dispatch(getMaincategory())
  },[])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Maincategory </h2></div>
      <form onSubmit={postData}>
 
  <div className="mb-3 p-2">
    <input type="text" className="form-control" id="add" onChange={getData} placeholder='Enter Maincategory'/>
  </div>
  
  <button type="submit" className="btn btn-primary w-100 px-2">Submit</button>
</form>
        </div>
              </div>
    </>
  )
}
