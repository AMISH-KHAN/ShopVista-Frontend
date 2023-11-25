import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActioncreator'
import { Link } from 'react-router-dom'

export default function Home() {
	let dispatch = useDispatch()
	let product = useSelector((state) => state.ProductStateData)
	product.reverse()
	product = product.slice(0, 7)
	// console.log("product",product[1].name)
	useEffect(() => {
		dispatch(getProduct())
	},[])
  return (
    <>
      <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><Link href="#" className="btn btn-white-outline">Explore</Link></p>
							</div>
						</div>
						<div className="col-lg-7">
							  <img src="./public/assets/images/bg_1.png" className="img-fluid" />
							{/* <div className="hero-img-wrap ">
							</div> */}
						</div>
					</div>
				</div>
			</div>

		<div className="product-section">
			<div className="container">
				<div className="row">

					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><Link to="/shop" className="btn">Explore</Link></p>
					</div> 
					
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
								{/* <Link className="product-item" to="/cart">
									  <img src={`./assets/productimages/${item.pic1}`} className="img-fluid product-thumbnail" height={"200px"} width={"200px"}/>
									  <h3 className="product-title">{ item.name}</h3>
									  <strong className="product-price">&#8377;{ item.finalprice}</strong>

							<span className="icon-cross">
								<img src="./public/assets/images/cross.svg" className="img-fluid"/>
							</span>
						</Link> */}
					</div> 
							)
						})}

					

				</div>
			</div>
		</div>

		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./public/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./public/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./public/assets/images/support.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="./public/assets/images/return.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="./public/assets/images/image_3.jpg" alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="./public/assets/images/image_1.jpg" alt="Untree.co"/></div>
							<div className="grid grid-2"><img src="./public/assets/images/image_2.jpg" alt="Untree.co"/></div>
							<div className="grid grid-3"><img src="./public/assets/images/image_6.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><Link herf="#" className="btn">Explore</Link></p>
					</div>
				</div>
			</div>
		</div>

		{/* <div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./public/assets/images/product-1.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Nordic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./public/assets/images/product-2.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Kruzo Aero Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="./public/assets/images/product-3.png" alt="Image" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Ergonomic Chair</h3>
								<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><Link href="#">Read More</Link></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div> */}

		<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div id="carouselExample" className=" testimonial-slider-wrap carousel slide mt-5">
  <div className="carousel-inner">
  <div className="carousel-item active">
  <div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
    </div>
    <div className="carousel-item">
	<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
    </div>
    <div className="carousel-item">
	<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="./assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
			</div>
		</div>

		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<Link href="#" className="more">View All Posts</Link>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="./public/assets/images/post-1.jpg" alt="Image" className="img-fluid"/></Link>
							<div className="post-content-entry">
								<h3><Link href="#">First Time Home Owner Ideas</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 19, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="./public/assets/images/post-2.jpg" alt="Image" className="img-fluid"/></Link>
							<div className="post-content-entry">
								<h3><Link href="#">How To Keep Your Furniture Clean</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Robert Fox</Link></span> <span>on <Link href="#">Dec 15, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<Link href="#" className="post-thumbnail"><img src="./public/assets/images/post-3.jpg" alt="Image" className="img-fluid"/></Link>
							<div className="post-content-entry">
								<h3><Link href="#">Small Space Furniture Apartment Ideas</Link></h3>
								<div className="meta">
									<span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 12, 2021</Link></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		
    </>
  )
}
