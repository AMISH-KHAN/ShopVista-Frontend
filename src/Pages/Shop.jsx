import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActioncreator'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActioncreator';
import { Link } from 'react-router-dom'

export default function Shop() {
	let dispatch = useDispatch()
	let product = useSelector((state) => state.ProductStateData)
	let maincategory = useSelector((state) => state.MaincategoryStateData)
	product.reverse()
	product = product.slice(0, 7)
	// console.log(maincategory)
	// console.log("product",product[1].name)
	useEffect(() => {
		dispatch(getProduct())
		dispatch(getMaincategory())
	},[])
  return (
    <>
      <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>

		

		<div className="untree_co-section product-section before-footer-section">
			  <div className="container d-flex">
				  <div className="row">
					  <div className="col-md-2 col-12">
					  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Maincategory
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
										  {
											  maincategory.map((item, index) => {
												  return(
												<div className="form-check mb-2" key={index}>
													<input className="form-check-input" type="checkbox" name={item.name} value={item.name} id={ item.name} />
													<label className="form-check-label" for={item.name }>
												  {item.name}
												</label>
													  </div>
												  )
			})
	}
      </div>
    </div>
  </div>
 
 
</div>
					  </div>
				  
				  <div className="col-9">
					  
				  
		      	<div className="row">
					
				  {product.map((item, index) => {
							  return (
								  
								  <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-2">
									  <div className="card" >
  <img src={`./assets/productimages/${item.pic1}`} className="card-img-top img-fluid product-thumbnail" style={{height:"226px"}}/>
  <div className="card-body">
											  <h6 className="card-title">{item.name}</h6>
											  <div className="position-relative w-100">
												  <div className="w-50"><span className='card-item w-30'>{item.color} </span></div>
												  <div className=" position-absolute top-0 end-0"><sub><strike>&#8377;{item.baseprice}</strike></sub> <b>&#8377;{item.finalprice}</b></div>
												  </div>
    <Link to="/cart" className="btn btn-primary mt-2 w-100">add to cart</Link>
  </div>
</div>
								
					</div> 
							)
						})}
					</div>
					</div>
		      	</div>
		    </div>
		</div>
    </>
  )
}
