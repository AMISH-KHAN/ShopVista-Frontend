import React from 'react'
import Leftnav from './Leftnav'

export default function Adminhome() {
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
                  <td>Amish khan</td>
                </tr>
                <tr>
                  <th scope="row">User Name</th>
                  <td>Amishk</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>Amish333@gmail.com</td>
                </tr>
                <tr>
                      <th scope="row">Phone</th>
                      <td>129832123</td>
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
