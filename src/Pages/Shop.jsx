import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActioncreator'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActioncreator';
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActioncreator';
import { getBrand } from '../Store/ActionCreators/BrandActioncreator';
import { Link } from 'react-router-dom'

export default function Shop() {
	let [mc, setmc] = useState("all")
	let [sc, setsc] = useState("all")
	let [br, setbr] = useState("all")
	let [maxpr, setmaxpr] = useState(0)
	let [minpr, setminpr] = useState(0)
	// let [br, setbr] = useState("all")
	let [shopproduct,setshopproduct]=useState([])
	let dispatch = useDispatch()
	let product = useSelector((state) => state.ProductStateData)
	let maincategory = useSelector((state) => state.MaincategoryStateData)
	let subcategory = useSelector((state) => state.SubcategoryStateData)
	let brand = useSelector((state) => state.BrandStateData)
	product.reverse()
	// console.log(maincategory)
	// console.log("product",product[1].name)
	function getMc(e) {
		let value = e.target.value
		setmc(value)
	}
	function getSc(e) {
		let value = e.target.value
		console.log(value);
		setsc(value)
	}
	function getBr(e) {
		let value = e.target.value
		console.log(value);
		setbr(value)
	}
	function getmaxpr(e){
		let value =parseInt(e.target.value)
		// console.log(value)
		setmaxpr(value)
		priceFilter(minpr,value)
	}
	function getminpr(e){
		let value =parseInt(e.target.value)
		// console.log(value)
		setminpr(value)
		priceFilter(value,maxpr)
	}
	function priceFilter(min,max) {
		console.log("max",max)
		console.log("min",min)
		if (Number(min) > 0 && Number(max) > 0) {
			// console.log(typeof(min))
			setshopproduct(product.filter((item) => item.finalprice >= Number(min) && item.finalprice <= Number(max)))
			
		}
		else if (Number(min) > 0) {
			setshopproduct(product.filter((item) => item.finalprice >= Number(min)));
		  
		  }
		else if (Number(max) > 0 ) {
			// console.log(typeof(minpr))
			setshopproduct(product.filter((item) => item.finalprice <= Number(max) ))
			
		}
	}
	function applyFilter(e) {
		e.preventDefault()
		
		if (mc === 'all' && sc === "all" && br === "all")
            setshopproduct(product)
        else if (mc !== 'all' && sc === "all" && br === "all")
            setshopproduct(product.filter((item) => item.maincategory === mc))
        else if (mc === 'all' && sc !== "all" && br === "all")
            setshopproduct(product.filter((item) => item.subcategory === sc))
        else if (mc === 'all' && sc === "all" && br !== "all")
            setshopproduct(product.filter((item) => item.brand === br))
        else if (mc !== 'all' && sc !== "all" && br === "all")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.subcategory === sc))
        else if (mc !== 'all' && sc === "all" && br !== "all")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.brand === br))
        else if (mc === 'all' && sc !== "all" && br !== "all")
            setshopproduct(product.filter((item) => item.subcategory === sc && item.brand === br))
        else
        setshopproduct(product.filter((item) =>  item.maincategory === mc && item.subcategory === sc && item.brand === br))
		
	}
	function getData() {
		dispatch(getProduct())
		setshopproduct(product)
		dispatch(getSubcategory())
		dispatch(getMaincategory())
		dispatch(getBrand())
	}
	useEffect(() => {
		getData()
	},[product.length])
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
			  <div className="container ">
				  <div className="row">
					  <div className="col-md-3 col-lg-2 col-12">
										 <form onSubmit={applyFilter}>
					  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Maincategory
      </button>
    </h2>
							<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
									  
									  <div className="accordion-body">
												  <div className="form-check" >
												  <input className="form-check-input" type="radio" name="maincategory" value="all" id="allmain" onChange={getMc} />
											  <label className="form-check-label" htmlFor="allmain">
												All
											  </label>
											</div>
											  {
											maincategory.map((item, index) => {
											    return(
													<div className="form-check" key={index}>
														<input className="form-check-input" type="radio" name="maincategory" value={item.name} id={item.name} onChange={getMc} />
													<label className="form-check-label" htmlFor={item.name}>
													  {item.name}
													</label>
												  </div>
												  )
			})
											  }
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Subcategory
      </button>
    </h2>
							<div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
									  
									  <div className="accordion-body">
												  <div className="form-check" >
												  <input className="form-check-input" type="radio" name="subcategory"value="all" id="allsub" onChange={getSc} />
											  <label className="form-check-label" htmlFor="allsub">
												All
											  </label>
											</div>
											  {
											subcategory.map((item, index) => {
											    return(
													<div className="form-check" key={index}>
														<input className="form-check-input" type="radio" name="subcategory"value={item.name} id={ item.name} onChange={getSc} />
													<label className="form-check-label" htmlFor={item.name}>
													  {item.name}
													</label>
												  </div>
												  )
			})
											  }
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Brand
      </button>
    </h2>
							<div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
									  
									  <div className="accordion-body">
												  <div className="form-check" >
												  <input className="form-check-input" type="radio" name="brand"value="all" id="allbr" onChange={getBr} />
											  <label className="form-check-label" htmlFor="allbr">
												All
											  </label>
											</div>
											  {
											brand.map((item, index) => {
											    return(
													<div className="form-check" key={index}>
														<input className="form-check-input" type="radio" name="brand"value={item.name} id={ item.name} onChange={getBr} />
													<label className="form-check-label" htmlFor={item.name}>
													  {item.name}
													</label>
												  </div>
												  )
			})
											  }
      </div>
    </div>
  </div>
  <div className="row mt-2">
  <div className="col">
										<label className="form-check-label" htmlFor="minprice">Min price</label>
										<input type='number' className="form-control" min={0} name='minprice'  id='minprice' placeholder="Min price" aria-label="Min price" onChange={getminpr}   />
  </div>
  <div className="col">
										  <label className="form-check-label" htmlFor="maxprice">Max price</label>
										  <input type="number" className="form-control" min={0} placeholder="Max price"  name='maxprice'  id='maxprice' aria-label="Max price" onChange={getmaxpr} />
										  
  </div>
</div>
 
</div>
											  <button type="submit" className='btn  btn-sm mt-2 w-100'>Apply filter</button>
				</form>
					  </div>
				  
				  <div className="col-12 col-md-9">
				  
		      	<div className="row w-100">
					
				  {shopproduct.map((item, index) => {
							  return (
								  
								  <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-2">
									<Link to={`/singleproduct/${item.id}`}>
									  
									  <div className="card" >
  <img src={`./assets/productimages/${item.pic1}`} className="card-img-top img-fluid product-thumbnail" style={{height:"226px"}}/>
  <div className="card-body">
											  <h6 className="card-title">{item.name}</h6>
											  <div className="position-relative w-100">
												  <div className="w-50"><span className='card-item w-30'>{item.color} </span></div>
												  <div className=" position-absolute top-0 end-0"><sub><strike>&#8377;{item.baseprice}</strike></sub> <b>&#8377;{item.finalprice}</b></div>
												  </div>
    {/* <Link to="/cart" className="btn btn-primary mt-2 w-100">add to cart</Link> */}
  </div>
</div>
</Link>
								
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
