import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { getUser } from '../Store/ActionCreators/UserActioncreator';
import { useDispatch, useSelector } from 'react-redux';

export default function Adminuser() {
  let [data, setdata] = useState([])
  let users = useSelector((state) => state.UserStateData)
  let dispatch=useDispatch()
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: ' name', width: 130 },
    { field: 'username', headerName: 'User name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {field: 'phone',headerName: 'Phone',width: 140},
    {field: 'addressline1',headerName: 'Addressline1',width: 240},
    {field: 'addressline2',headerName: 'Addressline2',width: 240},
    {field: 'addressline3',headerName: 'Addressline3',width: 240},
    {field: 'pin',headerName: 'Pin',width: 90},
    {field: 'city',headerName: 'city',width: 90},
    {field: 'state',headerName: 'State',width: 90},
    
  ];
  
  let rows = [];
  if (Array.isArray(users)) {
    // console.log(users)
    for (let item of users) {
      rows.push(item)
    }
  }
  async function getAPIData() {
     await dispatch(getUser())
    console.log(users)
  }
  useEffect(() => {
  getAPIData()
  },[])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-md-6 col-12 bg-light mx-5">
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
        </div>
              </div>
    </>
  )
}
