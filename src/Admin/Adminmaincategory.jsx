import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteMaincategory, getMaincategory } from '../Store/ActionCreators/MaincategoryActioncreator';
import { Button } from '@mui/material';



export default function Adminmaincategory() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var maincategory = useSelector((state) => state.MaincategoryStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-updatemaincategory/" + row.id)
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
          dispatch(deleteMaincategory({ id: row.id }))
          }>
              <span class="material-symbols-outlined">
delete_forever
</span>
          </Button>,
  }
  ];
  
  let rows = [];
  console.log(maincategory)
  if (Array.isArray(maincategory)) {
    
    for (let item of maincategory) {
      rows.push(item)
      
    }
  }
  else {
    console.log("main category is not an array: ",maincategory)
  }
  function getAPIData(){
    dispatch(getMaincategory())
}
useEffect(() => {
   getAPIData()
}, [maincategory.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Maincategory <Link className="float-end" to="/admin-addmaincategory"> <span className="material-symbols-outlined ">
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
