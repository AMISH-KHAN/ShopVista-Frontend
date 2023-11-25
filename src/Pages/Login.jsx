import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
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
    alert(`
    email:${data.email},
    password:${data.password}
    `)
    }
    
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
