import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from '../Store/ActionCreators/UserActioncreator'

export default function Login() {
  let dispatch = useDispatch()
  let users=useSelector((state)=>state.UserStateData)
  const navigate=useNavigate()
  let [data, setdata] = useState({
    email: "",
    password:""
  })
    
  function getData(e) {
      let value=e.target.value
    let name = e.target.name
    setdata((old)=>{
      return {
        ...old,
        [name]:value
      }
    })
    }
  function postData(e) { 
    e.preventDefault()
    let item=users.find((item)=>item.email===data.email)
    
    if (item.email && item.password === data.password) {
      localStorage.setItem("login", true)
      localStorage.setItem("name", item.name)
      localStorage.setItem("username", item.username)
      localStorage.setItem("userid", item.id)
      localStorage.setItem("role", item.role)
      if(item.role==="Admin"){
      navigate("/admin-home")
      }
    else
      navigate("/home")
      // console.log("found")
    }
    else {
      alert("incorrect email or password")
    }
  }
  
  useEffect(() => {
    dispatch(getUser())
    },[])
  return (
      <>
          <div className='logincontainer d-flex justify-content-center m-5 ' >
              
          <form onSubmit={postData}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1"onChange={getData} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" name='password' onChange={getData}  className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary w-100" >Submit</button>
        <div className='text-center mt-2'>New user?? <Link className='primary' to={"/signup"}>SignUp</Link> </div>
        </form>
          </div>
    </>
  )
}
