import { Key } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Signup() {
  let [data, setdata] = useState({})
  
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
    if (data.password === data.cpassword) {

      localStorage.setItem(
        "login", true
        
  )
      alert(
        `
        name:${data.name},
        userName:${data.userName},
        email:${data.email},
        phone:${data.phone},
        password:${data.password},
        cpassword:${data.cpassword},
  
        `
      )
    }
    else {
      alert("password does not match")
    }

  }
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
