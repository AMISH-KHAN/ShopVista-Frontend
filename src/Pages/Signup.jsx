import { Key } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser, getUser } from '../Store/ActionCreators/UserActioncreator'

export default function Signup() {
  let dispatch = useDispatch()
  let [data, setdata] = useState({})
  let user=useSelector((state)=>state.UserStateData)
  let navigate = useNavigate()
  localStorage.setItem("name",data.name)
  function getData(e) {
    let name=e.target.name
    let value = e.target.value
    setdata((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    let founduser = user.find((item) => item.userName === data.userName || item.email=== data.email)
    if (founduser) {
      alert("user already exists")
    }
    else{
      
      if (data.password === data.cpassword) {
        let value = {
          name:data.name,
          username:data.username,
          email:data.email,
          phone:data.phone,
          password:data.password,
          addressline1:"",
          addressline2:"",
          addressline3:"",
          pin:"",
          city:"",
          state:"",
          pic:"",
          role:"User",
        }
        dispatch(addUser(value))
        
          navigate("/login")
      }
      else {
        alert("password does not match")
      }
    }

  }
  useEffect(() => {
    dispatch(getUser())
  },[])
  return (
    <>
          <div className='signupcontainer  '>
          <form className="row g-3" onSubmit={postData}>
  <div className="col-md-6">
    <label for="name" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" required="true" onChange={getData} id="name"/>
  </div>
  <div className="col-md-6">
    <label for="name" className="form-label">User Name</label>
    <input type="text" name='userName' className="form-control" required="true" onChange={getData} id="username"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" name='email' className="form-control" required="true" onChange={getData} id="inputEmail4"/>
          </div>
  <div className="col-md-6">
    <label for="phone" className="form-label">Phone</label>
    <input type="text" name='phone' className="form-control" required="true" onChange={getData} id="phone"/>
          </div>
          
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" required="true" onChange={getData} id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Confirm Password</label>
    <input type="password" name='cpassword' className="form-control" required="true" onChange={getData} id="inputPassword4"/>
  </div>

  
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Sign in</button>
  </div>
</form>
    </div>
    </>
  )
}
