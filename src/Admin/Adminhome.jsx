import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Store/ActionCreators/UserActioncreator'

export default function Adminhome() {
  let [user, setuser] = useState({})
  let users = useSelector((state) => state.UserStateData)
  let dispatch = useDispatch()
  function getAPIData() {
    dispatch(getUser())
    let d = users.find((item) => item.id === Number(localStorage.getItem("userid")) && item.role === "Admin")
    if (d) {
      setuser(d)
    }
  }

  useEffect(() => {
    getAPIData()
  },[])

  return (
    <>
      
        <div className="row my-4">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-9">
          <div className="row">

          <div className="col-md-6 col-12 " style={{height:"30%"}}>
            <img src="./assets/images/person_2.jpg" alt=""  style={{height:"300px"}} />
          </div>
          <div className='col-md-6 col-12'>
            <div className="table-responsive mt-4">
            <table className="table w-100" style={{height:"10%"}}>
              
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                      <td>{user.name}</td>
                </tr>
                <tr>
                  <th scope="row">User Name</th>
                      <td>{ user.username}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                      <td>{ user.email}</td>
                </tr>
                <tr>
                      <th scope="row">Phone</th>
                      <td>{ user.phone}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          </div>
        </div>
        </div>
    </>
  )
}
