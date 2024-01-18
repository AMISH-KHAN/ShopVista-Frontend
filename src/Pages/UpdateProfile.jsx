import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from '../Store/ActionCreators/UserActioncreator'
import { useNavigate, useParams } from 'react-router'

export default function UpdateProfile() {
  let { id } = useParams()
  let navigate=useNavigate()
    let [user,setUser]=useState({})
    let users = useSelector((state) => state.UserStateData)
  let dispatch = useDispatch() 
  function getData(e) {
    let name=e.target.name
    let value = e.target.value
    setUser((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    let value = {
      id:user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      password:user.password,
      addressline1: user.addressline1,
      addressline2: user.addressline2,
      addressline3: user.addressline3,
      pin: user.pin,
      city: user.city,
      state: user.state,
      pic: user.pic,
    }
    dispatch(updateUser(value))
    navigate("/profile")
  }
  function getFile(e){
    let name = e.target.name
    let value = e.target.files[0].name
    // console.log(value)
    setUser((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }
    useEffect(() => {
        dispatch(getUser())
        let data = users.find((item) => item.id === Number(id))
        if(data)
        setUser(data)
    },[])
  return (
    <>
      
      
          
        <div className="container">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>User</h2></div>
      <form onSubmit={postData} className='needs-validation'>
              
  <div className="mb-3 p-2 col-lg-12 ">
                <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder='Enter Full Name' required  value={user.name} />
              <div className="invalid-feedback">
       Name required
    </div>
            </div>
  <div className="mb-3 p-2 col-lg-12 ">
                <label htmlFor="username">User Name</label>
              <input type="text" className="form-control" id="username" name='username' onChange={getData} placeholder='Enter User Name' required  value={user.username} />
              <div className="invalid-feedback">
       User Name required
    </div>
            </div>
             <div className="row mb-3">
              <div className='col-lg-6 col-12'>
                <label htmlFor="email">Email</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='email'   placeholder='Enter Color' onChange={getData} required  value={user.email}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="phone">Phone</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='phone'   placeholder='Enter Color' onChange={getData} required  value={user.phone}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="addressline1">Address Line 1</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='addressline1'   placeholder='Enter Color' onChange={getData} required  value={user.addressline1}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="addressline2">Address Line 2</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='addressline2'   placeholder='Enter Color' onChange={getData} required  value={user.addressline2}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="addressline3">Address Line 3</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='addressline3'   placeholder='Enter Color' onChange={getData} required  value={user.addressline3}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="pin">pin</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='pin'   placeholder='Enter Color' onChange={getData} required  value={user.pin}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="city">City</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='city'   placeholder='Enter Color' onChange={getData} required  value={user.city}/>
                
    </div>
              <div className='col-lg-6 col-12'>
                <label htmlFor="state">State</label>
    <input type="text" className="form-control"  aria-describedby="inputGroup-sizing-lg" name='state'   placeholder='Enter Color' onChange={getData} required  value={user.state}/>
                
    </div>
             
              
             
              </div> 
              
              <div className="row mb-3">
                <div className="col-lg-6 col-12">
                
  <label htmlFor="pic" className="form-label">pic </label>
  <input className="form-control form-control-lg" id="pic" type="file" name="pic" onChange={getFile} />

                </div>
                
               
          </div>

    
  
  <button type="submit" className="btn btn-primary w-100 px-2">Submit</button>
</form>
</div>
              
    </>
  )
}
