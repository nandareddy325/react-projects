import React from "react";
import Logo9 from '../Images/image_13.webp'
const Content = ()=>{
    return(
        <>
        <div className='Contact  align-content-center'>
            <div className='container'>
                <div className='row'>
                    <div className="col-8">
                <div className='about mt-5'>
                    <h1 className=''>Contact</h1>
                                <p className=" d-none d-lg-block d-md-block d-sm-block">Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, </p>
                                <button className=' d-none d-lg-block d-md-block d-sm-block  btn btn-outline-light'>Click more</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        {/* ---------------------------------contact--------------------------- */}
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-10 col-10 mx-auto">
                    <h3 className="text-center text-primary mb-5">Our Company</h3>
                    <div className=" border border-5 border-primary shadow">
                    <img src={Logo9} className="w-100"/>
                    </div>

                </div>
                <div className="col-xl-6 col-md-6 col-sm-10 col-10 mx-auto">
                <h3 className="text-center text-primary mb-5 ">Map</h3>
                <div className=" border border-5  border-primary shadow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30441.75562653149!2d78.401586!3d17.49703455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723412235565!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>
        </div>
        {/*-------------------------c--------------------  */}

        <div className="container mt-5">
            <h2 className="text-center display-5 fw-bold ">Contact</h2>
            <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> 
            <div className="row  mt-4  mb-4">
                <div className="col-10 col-sm-10 col-md-3 col-lg-3 text-center mx-auto">
                    <div  className=" p-4">
                    <i class=" fs-3 text-danger  fa-solid fa-location-dot"></i>
                    <h3  className="text-primary">Address</h3>
                        <p  className="text-muted">A108 Adam Street, New York, NY 535022</p>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-3 col-lg-3 text-center  mx-auto">
                    <div className=" p-4">
                    <i class="fs-3 text-danger fa-duotone fa-solid fa-phone"></i>
                    <h3 className="text-primary">Phone Number</h3>
                        <p className="text-muted">+91123456789</p>
                    </div>
                </div>
                <div className="col-10 col-sm-10 col-md-3 col-lg-3 text-center  mx-auto">
                    <div className=" p-4">
                    <i class="fs-3 text-danger fa-regular fa-envelope"></i>
                    <h3  className="text-primary">Email Us</h3>
                    <p  className="text-muted">info@example.com</p>
                    </div>
                </div>
            </div>
            <form>
                <div className="row shadow bg-white p-5 ">
                    <h1 className="text-center text-primary
                    ">LOGIN</h1>
                  <div className="col-6 p-2">
                  <input type="text" className="form-control shadow-none  border-1 rounded-0 border-dark " placeholder="Your Name"/>
                 </div>
                 <div className="col-6  p-2">
                      <input type="text" className="form-control shadow-none border-1 rounded-0 border-dark" placeholder="Your mail"/>
                 </div>
                 <div class="col-12  p-2 mt-3">
                      <input type="text" className="form-control shadow-none rounded-0 border-1 border-dark" placeholder="Subject"/>
                 </div>
                 <div className="col-12 mt-3">
                 <textarea className="form-control  border border-1 shadow-none rounded-0 border-dark" placeholder="Enter massage" rows="3"></textarea>
                 </div>
                 <div className="text-center  mt-4">
                 <button type="submit" className="btn btn-primary">Send Massage</button>

                 </div>
                 
  </div>
</form>
        </div>
    

        </>
    )

}
export default Content;