import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteBrand, getBrand } from '../Store/ActionCreators/BrandActioncreator';
import { Button } from '@mui/material';



export default function Adminbrand() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var brand = useSelector((state) => state.BrandStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-updatebrand/" + row.id)
          }}>
              <span className="material-symbols-outlined">
                  edit
              </span>
          </Button>,
  },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => 
          dispatch(deleteBrand({ id: row.id }))
          }>
              <span className="material-symbols-outlined">
delete_forever
</span>
          </Button>,
  }
  ];
  
  let rows = [];
  console.log(brand)
  if (Array.isArray(brand)) {
    
    for (let item of brand) {
      rows.push(item)
      
    }
  }
  else {
    console.log("main category is not an array: ",brand)
  }
  function getAPIData(){
    dispatch(getBrand())
}
useEffect(() => {
   getAPIData()
}, [brand.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Brand <Link className="float-end" to="/admin-addbrand"> <span className="material-symbols-outlined ">
<h2>add</h2>
</span></Link></h2></div>
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
