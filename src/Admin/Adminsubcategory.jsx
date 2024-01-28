import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteSubcategory, getSubcategory } from '../Store/ActionCreators/SubcategoryActioncreator';
import { Button } from '@mui/material';



export default function Adminsubcategory() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var subcategory = useSelector((state) => state.SubcategoryStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-updatesubcategory/" + row.id)
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
          dispatch(deleteSubcategory({ id: row.id }))
          }>
              <span class="material-symbols-outlined">
delete_forever
</span>
          </Button>,
  }
  ];
  
it   let rows = [];
  if (Array.isArray(subcategory)) {
    
    for (let item of subcategory) {
      rows.push(item)
      
    }
  }
 
  function getAPIData(){
    dispatch(getSubcategory())
}
useEffect(() => {
   getAPIData()
}, [subcategory.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Subcategory <Link className="float-end" to="/admin-addsubcategory"> <span className="material-symbols-outlined ">
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
