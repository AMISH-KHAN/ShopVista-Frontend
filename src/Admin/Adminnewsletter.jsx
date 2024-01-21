import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getNewsletter, deleteNewsletter } from '../Store/ActionCreators/NewsletterActioncreator';
import { Button } from '@mui/material';



export default function Adminnewsletter() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var newsletter = useSelector((state) => state.NewsletterStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'email', headerName: 'email', width: 230 },
  ];
  
  let rows = [];
  console.log(newsletter)
  if (Array.isArray(newsletter)) {
    
    for (let item of newsletter) {
      rows.push(item)
      
    }
  }
  else {
    console.log("main category is not an array: ",newsletter)
  }
  function getAPIData(){
    dispatch(getNewsletter())
}
useEffect(() => {
   getAPIData()
}, [newsletter.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Newsletter </h2></div>
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
