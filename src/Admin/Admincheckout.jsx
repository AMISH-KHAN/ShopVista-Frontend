import React, {useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getCheckout, deleteCheckout } from '../Store/ActionCreators/CheckoutActioncreator';
import { Button } from '@mui/material';



export default function Admincheckout() {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  let checkout = useSelector((state) => state.CheckoutStateData)
 
  let columns = [
    { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User Id', width: 130 },
        { field: 'paymentmode', headerName: 'Payment Mode', width: 130 },
        { field: 'paymentstatus', headerName: 'Payment Status', width: 130 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 130 },
        { field: 'shippingAmount', headerName: 'Shipping Amount', width: 130 },
        { field: 'finalAmount', headerName: 'Final Amount', width: 130 },
        { field: 'time', headerName: 'Date', width: 200 },
    
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      renderCell: ({ row }) =>
          <Button onClick={() => {
              navigate("/admin-singlecheckout/" + row.id)
          }}>
              <span className="material-symbols-outlined">
                  visibility
              </span>
          </Button>,
  }
  ];
  
  let rows = [];
  console.log(checkout)
  if (Array.isArray(checkout)) {
    
    for (let item of checkout) {
      rows.push(item)
      
    }
  }
  else {
    console.log("main category is not an array: ",checkout)
  }
  function getAPIData(){
    dispatch(getCheckout())
}
useEffect(() => {
   getAPIData()
}, [checkout.length])
  return (
    <>
      <div className="row my-4 ">
          <div className="col-md-2 col-12">
            <Leftnav/>
        </div>
        <div className="col-md-8 col-sm-12 mx-5">
      <div className="my-2 w-100 bg-light p-2"> <h2 className='text-center lg'>Checkout <Link className="float-end" to="/admin-addcheckout"></Link></h2></div>
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
