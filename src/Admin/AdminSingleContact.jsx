import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { deleteContact, getContact, updateContact } from '../Store/ActionCreators/ContactActioncreator'
import Leftnav from './Leftnav'

export default function AdminSingleContact() {
    let { id } = useParams()
    let [data,setdata]=useState([])
    let contacts = useSelector((state) => state.ContactStateData)
    let dispatch = useDispatch()
    let navigate=useNavigate()
    async function getAPIData() {
        dispatch(getContact())
        let d =await contacts.find((item) => item.id === Number(id))
        // console.log(contacts)
        if (d) {
            setdata(d)
        }
    }
     function update() {
        dispatch(updateContact({...data,"status":"done"}))
        setdata((old) => {
            return {
                ...old,
                status:"done"
            }
        })
    }
    function deleterecord() {
        dispatch(deleteContact({ ...data,status:"done"}))
        navigate("/admin-contactus")
    }
    useEffect(() => {
        getAPIData()
    },[contacts.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row my-4">
                <div className="col-md-2 col-12 mb-3">
            <Leftnav/>
                    </div>
                    <div className="col-md-10 col-sm-12 ">
                        <h5 className='bg-secondary text-center text-light p-1'>Single Contact </h5>
                        <div className="table-responsive mt-4">
            <table className="table w-100" style={{height:"10%"}}>
              
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                                        <td>{ data.id}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                                        <td>{data.email }</td>
                </tr>
                <tr>
                      <th scope="row">Phone</th>
                                        <td>{ data.phone}</td>
                </tr>
               
                <tr>
                      <th scope="row">Message</th>
                                        <td className='text-break'><p>{ data.message}</p></td>
                </tr>
                <tr>
                      <th scope="row">Status</th>
                                        <td >{ data.status}</td>
                </tr>
                <tr>
                      <th scope="row">Time</th>
                                        <td >{ data.time}</td>
                </tr>
              </tbody>
            </table>
                        </div>
                        {data.status === "Active"?<button className="btn btn-primary w-100" onClick={update}>done</button>
                        : <button className="btn btn-secondary w-100" onClick={deleterecord}>delete</button>
                        }
                    </div>
                </div>
        </div>
      
    </>
  )
}
