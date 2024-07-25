
import React from 'react';
import { NavLink } from 'react-router-dom';

function index() {
  return (
    <div>
   

    {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ minHeight: '300px' }}>
                    <img className="position-relative w-100" src="/assets/img/carousel-1.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} alt=""/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-md-3">Learn with a Peer</h5>
                            <h1 className="display-3 text-white mb-md-4">Most Intuitive way to learn</h1>
                            <NavLink to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{ minHeight: '300px' }}>
                    <img className="position-relative w-100" src="/assets/img/carousel-2.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} alt=""/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-md-3">Variety Of courses Available</h5>
                            <h1 className="display-3 text-white mb-md-4">Expound your mind with ideas</h1>
                            <NavLink to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{ minHeight: '300px' }}>
                    <img className="position-relative w-100" src="https://intrepidednews.com/wp-content/uploads/2022/03/REAL-2.jpg" style={{ minHeight: '300px', objectFit: 'cover' }} alt=""/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-md-3">Affordable Content</h5>
                            <h1 className="display-3 text-white mb-md-4">With just a click of a button</h1>
                            <NavLink to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Carousel End --> */}

    {/* <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png" alt=""/>
                </div>
                <div className="col-lg-7">
                    <div className="text-left mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Welcome to our community of learners! At our core, we believe in the power of peer-to-peer learning and the remarkable potential it holds to transform education. Our platform is designed to make learning not only accessible but engaging and effective. Whether you are a student looking to expand your knowledge or a tutor eager to share your expertise, you've found your perfect educational partner.</p>
                    <NavLink to="about.html" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</NavLink>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

    {/* <!-- Services Start --> */}
    <div className="container-fluid py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Our Services</h5>
                <h1>What We Offer</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="p-4 rounded bg-white shadow-sm h-100">
                        <i className="fa fa-4x fa-book text-primary mb-3"></i>
                        <h4 className="text-dark mb-3">Wide Range of Courses</h4>
                        <p>Choose from a diverse selection of courses tailored to suit your learning needs.</p>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="p-4 rounded bg-white shadow-sm h-100">
                        <i className="fa fa-4x fa-users text-primary mb-3"></i>
                        <h4 className="text-dark mb-3">Peer-to-Peer Learning</h4>
                        <p>Engage in collaborative learning experiences with peers and mentors.</p>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="p-4 rounded bg-white shadow-sm h-100">
                        <i className="fa fa-4x fa-certificate text-primary mb-3"></i>
                        <h4 className="text-dark mb-3">Certification</h4>
                        <p>Earn certifications that validate your skills and expertise in various fields.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}

    
   
</div>
  );
}

export default index;
