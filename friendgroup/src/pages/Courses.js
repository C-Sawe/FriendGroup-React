import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const Courses = () => {
    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
                        <h3 className="display-4 text-white text-uppercase">Courses</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Courses</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}

            {/* Category Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Faculties</h5>
                        <h1>Explore Available Faculties</h1>
                    </div>
                    <div className="row">
                        {/* Business Courses */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/cat-1.jpg" alt="Business Courses" />
                                <Link to="/Coursemain?type=business" className="cat-overlay text-white text-decoration-none">
                                    <h4 className="text-white font-weight-medium">Business Courses</h4>
                                    <span>Explore 5 Courses</span>
                                </Link>
                            </div>
                        </div>

                        {/* Science Courses */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/cat-2.jpg" alt="Science Courses" />
                                <Link to="/Coursemain?type=science" className="cat-overlay text-white text-decoration-none">
                                    <h4 className="text-white font-weight-medium">Science Courses</h4>
                                    <span>Explore 5 Courses</span>
                                </Link>
                            </div>
                        </div>

                        {/* Mathematics Courses */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/cat-3.jpg" alt="Mathematics Courses" />
                                <Link to="/Coursemain?type=mathematics" className="cat-overlay text-white text-decoration-none">
                                    <h4 className="text-white font-weight-medium">Mathematics Courses</h4>
                                    <span>Explore 5 Courses</span>
                                </Link>
                            </div>
                        </div>

                        {/* Engineering Courses */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="assets/img/cat-7.jpg" alt="Engineering Courses" />
                                <Link to="/Coursemain?type=engineering" className="cat-overlay text-white text-decoration-none">
                                    <h4 className="text-white font-weight-medium">Engineering Courses</h4>
                                    <span>Explore 5 Courses</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}
        </div>
    );
};

export default Courses;
