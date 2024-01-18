import React, { useEffect, useState } from 'react'
import { addNewsletter, getNewsletter } from '../Store/ActionCreators/NewsletterActioncreator'
import { useDispatch, useSelector } from 'react-redux'
export default function Footer() {
	let [data, setData] = useState([])
	let [msg, setmsg] = useState("")
	let [show, setshow] = useState(false)
	let newsletters=useSelector((state)=>state.NewsletterStateData)
	let dispatch = useDispatch()
	function getData(e) {
		let name = e.target.name
		let value = e.target.value
		setData((old)=>{
			return {
				...old,
				[name]:value
			}
		})
	}
	async function postData(e) {
		e.preventDefault()
		console.log(newsletters)
		var d =await newsletters.find((item) => item.email === data.email)
		console.log(d)
		if (d) {
			setshow(true)
			setmsg("Your Email Id is Already Subscribed!!!!")
		}
		else {
			let item = {
				name: data.name,
				email:data.email
			}
			
			await dispatch(addNewsletter(item))
			setshow(true)
			setmsg("Thanks to Subscibe our Newsletter Service!!!")
		}
	}
	useEffect(()=>{
        dispatch(getNewsletter())
    },[newsletters.length])
  return (
    <>
      <footer className="footer-section">
			<div className="container relative">


				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src="/public/assets/images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>
							  {show ? <div className="alert alert-success alert-dismissible fade show" role="alert">
								  {msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setshow(false)}}></button>
</div>:""}
							<form  className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" name='name' onChange={getData} placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" name='email' onChange={getData} placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary" onClick={postData}>
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">ShopVista<span>.</span></a></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul className="list-unstyled custom-social">
							<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
          
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
    </>
  )
}
