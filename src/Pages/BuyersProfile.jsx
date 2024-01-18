import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Store/ActionCreators/UserActioncreator'

import { useNavigate } from 'react-router'
export default function BuyersProfile() {
  let [user,setUser]=useState({})
  let users = useSelector((state) => state.UserStateData)
  let dispatch = useDispatch()
  
  async function getData() {
    if (!user.id) {
      dispatch(getUser())
      let data = await users.find((item) => item.id === Number(localStorage.getItem("userid")))
      if (data)
        setUser(data)
    }   
  }
  useEffect(() => {
    getData()
  }, [users.length])

  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{ user.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{ user.email}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{ user.phone}</p>
              </div>
            </div>
            <hr/>
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{user.addressline1},{user.addressline2},{user.addressline3 }</p>
              </div>
            </div>
            <hr/>
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Pin</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{user.pin}</p>
              </div>
            </div>
            <hr/>
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">city</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{user.city}</p>
              </div>
            </div>
            <hr/>
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">State</p>
              </div>
              <div className="col-sm-9">
                                      <p className="text-muted mb-0">{user.state}</p>
              </div>
            </div>
          </div>
        </div>
    
          </div>
        </div>
      </div>
    </>
  )
}
