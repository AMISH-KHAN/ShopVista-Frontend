import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../Store/ActionCreators/ProductActioncreator';
import { Button } from '@mui/material';



export default function Adminproduct() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  var product = useSelector((state) => state.ProductStateData)
  let columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'maincategory', headerName: 'maincategory', width: 120 },
    { field: 'subcategory', headerName: 'subcategory', width: 120 },
    { field: 'brand', headerName: 'brand', width: 120 },
    { field: 'color', headerName: 'color', width: 100 },
    { field: 'size', headerName: 'size', width: 50 },
    { field: 'baseprice', headerName: 'Base Price', width: 130, renderCell: ({ row }) =>  <p className='my-2'>&#8377;{ row.baseprice } </p>  },
    { field: 'discount', headerName: 'Discount', width: 130, renderCell: ({ row }) =>  <p className='my-2'>{ row.discount } %</p>  },
    { field: 'finalprice', headerName: 'Final Price', width: 130, renderCell: ({ row }) =>  <p className='my-2'>&#8377;{ row.finalprice } </p>  },
    { field: 'pic1', headerName: 'Pic 1', width: 70, renderCell: ({ row }) => <img src={`./assets/productimages/${row.pic1}`} alt="" height="50px" width="100%" className='rounded'/>  },
    { field: 'pic2', headerName: 'Pic 2', width: 70, renderCell: ({ row }) => <img src={`./assets/productimages/${row.pic2}`} alt="" height="50px" width="100%" className='rounded'/>  },
    { field: 'pic3', headerName: 'Pic 3', width: 70, renderCell: ({ row }) => <img src={`./assets/productimages/${row.pic3}`} alt="" height="50px" width="100%" className='rounded'/>  },
    { field: 'pic4', headerName: 'Pic 4', width: 70, renderCell: ({ row }) => <img src={`./assets/productimages/${row.pic4}`} alt="" height="50px" width="100%" className='rounded'/>  },
    
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-updateproduct/" + row.id)
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
          dispatch(deleteProduct({ id: row.id }))
          }>
              <span className="material-symbols-outlined">
delete_forever
</span>
          </Button>,
  }
  ];
  
  let rows = [];
  // console.log(product)
  if (Array.isArray(product)) {
    
    for (let item of product) {
      rows.push(item)
      
    }
  }
  else {
    // console.log("main category is not an array: ",product)
  }
  function getAPIData(){
    dispatch(getProduct())
}
useEffect(() => {
   getAPIData()
}, [product.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-lg-9 col-12mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Product <Link className="float-end" to="/admin-addproduct"> <span className="material-symbols-outlined ">
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
