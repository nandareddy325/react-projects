import React from 'react';
import Logo10 from '../Images/image_12.jpg'
import Logo11 from '../Images/Evenfoot.jpeg'
import Logo12 from '../Images/Evenhome.jpg'
import Logo1 from '../Images/image_1.webp'
import Logo2 from '../Images/image_2.webp'
import Logo3 from '../Images/image_3.webp'
import Logo4 from '../Images/image_4.webp'
import Logo5 from '../Images/image_5.webp'
import Logo6 from '../Images/image_6.webp'
import Logo7 from '../Images/image_7.jpg'
import Logo8 from '../Images/image_8.webp'
import Logo9 from '../Images/image_9.webp'
function Home() {
  return (
    <>
    <div>
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Logo10} className="d-block img" alt="corp"/>
                        <div className="carousel-caption mb-5 d-none d-md-block">
                            <h5   className='mb-5 display-2 fw-bold'>First slide label</h5>
                            <p className='mb-5 fs-4'>Some representative placeholder content for the first slide.</p>
                            <button className='btn btn-outline-success py-2 px-5'>More</button>
                       </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Logo11} className="d-block" alt="..."/>
                        <div className="carousel-caption mb-5 d-none d-md-block">
                            <h5   className='mb-5 display-2 fw-bold'>Second slide label</h5>
                            <p className='mb-5 fs-4'>Some representative placeholder content for the second slide.</p>
                            <button className='btn btn-outline-danger py-2 px-5'>More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Logo12} className="d-block" alt="..."/>
                        <div className="carousel-caption mb-5 d-none d-md-block">
                            <h5  className='mb-5 display-2 fw-bold'>Third slide label</h5>
                            <p className='mb-5 fs-4'>Some representative placeholder content for the third slide.</p>
                            <button className='btn btn-outline-primary py-2 px-5'>More</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>                
        </div>



    {/* --------------------------End--Carousel----------------------------- */}


    <div className="container " id="About">
            <h2 className="text-center mt-5"><span className="text-danger">-</span>ABOUT<span className="text-danger">-</span></h2>
            <p className="text-muted text-center">-Learn more about us-</p>
            <div className="row " >
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-10 mx-auto mt-5">
                    <div className="">
                    <img src={Logo3} class="d-block w-100" alt="corp"/>
                    </div>
                </div>
                <div className=" col-xl-6 col-lg-12 col-md-12 col-sm-12 col-10 mx-auto  mt-5">
                    <h5 className="text-danger">Lorem:-</h5>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className="mt-5">
                    <h4>HTML <i  data-bs-toggle="tooltip" data-bs-placement="top" title="HTML"  class="fa-brands fa-html5"></i></h4>
                    <div className="progress">
                         <div  className="progress-bar  progress_1 progress-bar-striped" role="progressbar" aria-valuenow="0" 
                         aria-valuemin="70" aria-valuemax="100">70%</div>
                    </div>
                    <h4>CSS <i  data-bs-toggle="tooltip" data-bs-placement="top" title="CSS" class="fa-brands fa-css3-alt"></i></h4>
                    <div className="progress">
                         <div className="progress-bar progress_2 progress-bar-striped bg-success " role="progressbar" aria-valuenow="0" 
                         aria-valuemin="50" aria-valuemax="100">50%</div>
                    </div>
                    <h4>React js <i  data-bs-toggle="tooltip" data-bs-placement="top" title="React Js"  class="fa-brands fa-react "></i></h4>
                    <div className="progress">
                         <div className="progress-bar progress_3 progress-bar-striped bg-info" role="progressbar" aria-valuenow="0" 
                         aria-valuemin="80" aria-valuemax="100">80%</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        {/* ---------------------------------- */}
        <div className='container mt-5 mb-5  materialkit'>
            <div className='row'>
            <div className='col-xl-8 col-lg-6  col-md-12 col-md-'>
                    <div className='row mt-3'>
                        <div className='col-lg-6  col-md-6 col-sm-12 col-10 mx-auto'>
                            <div className='p-2 cards'>
                                <a href='#'><i class="fa-regular fa-clone"></i></a>
                                <h3 className='mt-3 mb-2'>Full Documentation</h3>
                                <p>Built by developers for developers. Check the foundation and 
                                    you will find everything inside our documentation.</p>
                            </div>
                        </div>
                        <div className='col-lg-6  col-md-6 col-sm-12 col-10 mx-auto'>
                            <div className='p-2 cards'>
                            <a href='#'><i className="fa-sharp fa-solid fa-download"></i></a>
                                <h3 className='mt-3 mb-2'>MUI Ready</h3>
                                <p>The world's most popular react components library for building user interfaces.</p>
                            </div>
                        </div>
                        <div className='col-lg-6  col-md-6 col-sm-12 col-10 mx-auto'>
                        <div className='p-2 cards'>
                        <a href='#'><i className="fa-solid fa-hourglass-end"></i></a>
                                <h3 className='mt-3 mb-2'>Save Time & Money</h3>
                                <p>Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-10 mx-auto'>
                        <div className='p-2 cards'>
                        <a href='#'><i className="fa-solid fa-address-card"></i></a>
                                <h3 className='mt-3 mb-2'>Fully Responsive</h3>
                                <p>Regardless of the screen size, the website content will naturally fit the given resolution.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-12 mt-lg-5 col-sm-12 col-10 mx-auto'>
                    <div className='img rounded align-content-center p-4'>
                        <div className='text-white text-center p-3 '>
                            <h2>Feel the Material Kit</h2>
                            <p className=''>All the MUI Componets that you need in a development have been re-design with the new look</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
 {/* ============================ */}
 <div className='container'>
    <div className='row'>
        <div className='col-lg-3 col-md-3 col-sm-8  col-8 mx-auto text-center'>
            <div className='mt-5'>
                <h1 className='display-5 fw-bold text-primary'>5,234</h1>
                <h6 className='fw-bold fs-5'>Project</h6>
                <p>Of <q>high-performing</q> level are led by a certified project manager</p>
            </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-8 col-8 mx-auto text-center'>
            <div className='mt-5'>
                <h1  className='display-5 fw-bold text-primary'>3,400+</h1>
                <h6 className='fw-bold fs-5'>Hours</h6>
                <p>That meets quality standards required by our users</p>
            </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-8  col-8 mx-auto text-center'>
            <div className='mt-5'>
                <h1  className='display-5 fw-bold text-primary'>24/7</h1>
                <h6 className='fw-bold fs-5'>Support</h6>
                <p>Actively engage team members that finishes on time</p>
            </div>
        </div>
    </div>
 </div>
        {/* --------------------------------------------- */}
        
        <div className="container mt-5 mb-5 " id="Works">
            <h1 className="text-center mb-4"><span className="text-danger">-</span>WORKERS<span className="text-danger">-</span></h1>
            <div className="row  g-4">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-10  mx-auto Image ">
                    <div className="imgess">
                    <img src={Logo1} class="d-block  imgs" alt="corp" />
                    </div> 
                </div>
                <div className="col-xl-4 col-lg-4  mx-auto col-md-6 col-sm-12 col-10 Image">
                <div className="imgess">
                    <img src={Logo2} class="d-block  imgs  " alt="corp" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4  mx-auto col-md-6 col-sm-12 col-10 Image">
                <div className="imgess">
                    <img src={Logo3} class="d-block  imgs " alt="corp" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4  mx-auto col-md-6 col-sm-12 col-10 Image">
                <div className="imgess">
                    <img src={Logo4} class="d-block  imgs " alt="corp" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto col-10 Image">
                <div className="imgess">
                    <img src={Logo5} class="d-block  imgs  " alt="corp" />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mx-auto col-10 Image">
                <div className="imgess">
                    <img src={Logo6} class="d-block  imgs " alt="corp" />
                    </div> 
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mx-auto col-10 Image">
                <div className="imgess">
                    <img src={Logo7} class="d-block  imgs"   alt="corp" />
                    </div>
                    
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mx-auto col-10 Image">
                <div className="imgess">
                    <img src={Logo8} class="d-block  imgs" alt="corp" />
                    </div>
                    
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-10 mx-auto Image">
                <div className="imgess">
                    <img src={Logo9} class="d-block  imgs" alt="corp" />
                    </div>
                    
                </div>

            </div>

        </div>
    </>
      )
}
export default Home;
