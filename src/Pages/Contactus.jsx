import React, { useState } from 'react'
import { addContact } from '../Store/ActionCreators/ContactActioncreator'
import { useDispatch, useSelector } from 'react-redux'
export default function Contactus() {
  var [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  let [msg,setmsg]=useState(false)
  let contacts = useSelector((state) => state.NewsletterStateData)
  let dispatch=useDispatch()
  async function getData(e) {
    let name = e.target.name
    let value = e.target.value
    
    setdata((old) => {
      return {
        ...old,
        [name]:value
      }
    })
  }
  async function postData(e) {
    e.preventDefault()
        var item = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            status: "Active",
            time: new Date()
    }
    dispatch(addContact(item))
    setmsg(true)
  }
  return (
    <>
			 
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Contact</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						{/* <div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="./assets/images/couch.png" className="img-fluid"/>
							</div>
						</div> */}
					</div>
				</div>
          </div>
          
		<div className="untree_co-section">
      <div className="container">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-8 col-lg-8 pb-4">


              <div className="row mb-5">
                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    </div>
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>info@yourdomain.com</p>
                    </div> 
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>+1 294 3925 3939</p>
                    </div> 
                  </div> 
                </div>
              </div>

                      {msg?<div className="alert alert-success alert-dismissible fade show" role="alert">
                      Thanks to Share Your Query With US!!! Our Team Will Contact You Soon!!!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"  onClick={()=>{setmsg(false)}}></button>
</div>:""}
              <form>
                <div className="row">
                    <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="name">Name</label>
                      <input type="text" className="form-control" onChange={getData} name="name" id="name"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="phone">Phone</label>
                      <input type="text" className="form-control" onChange={getData} name="phone" id="phone"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" for="email">Email address</label>
                  <input type="email" className="form-control" onChange={getData} name='email' id="email"/>
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" for="message">Message</label>
                  <textarea  className="form-control" onChange={getData} name="message" id="message" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" className="btn btn-primary-hover-outline" onClick={postData}>Send Message</button>
              </form>

            </div>

          </div>

        </div>

      </div>


    </div>
 

    </>
  )
}
