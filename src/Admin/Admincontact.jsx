import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getContact, deleteContact } from '../Store/ActionCreators/ContactActioncreator';
import { Button } from '@mui/material';



export default function Admincontact() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var contact = useSelector((state) => state.ContactStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'phone', headerName: 'phone', width: 130 },
    { field: 'message', headerName: 'message', width: 130 },
    { field: 'status', headerName: 'status', width: 130 },
    { field: 'time', headerName: 'time', width: 130 },
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-singlecontact/" + row.id)
          }}>
              <span className="material-symbols-outlined">
                  visibility
              </span>
          </Button>,
  },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => 
          dispatch(deleteContact({ id: row.id }))
          }>
              <span class="material-symbols-outlined">
delete_forever
</span>
          </Button>,
  }
  ];
  
  let rows = [];
  console.log(contact)
  if (Array.isArray(contact)) {
    
    for (let item of contact) {
      rows.push(item)
      
    }
  }
  else {
    console.log("main category is not an array: ",contact)
  }
  function getAPIData(){
    dispatch(getContact())
}
useEffect(() => {
   getAPIData()
}, [contact.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Contact <Link className="float-end" to="/admin-addcontact"></Link></h2></div>
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
