import React from "react";


function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: '90px' }}>
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Get In Touch</h5>
                                <p><i className="fa fa-map-marker-alt mr-2"></i>OLe Sangale, Nairobi, Kenya</p>
                                <p><i className="fa fa-phone-alt mr-2"></i><a href="tel:+254799999999">+254 799999999</a></p>
                                <p><i className="fa fa-envelope mr-2"></i><a href="mailto:Friendgroup@gmail.com">Friendgroup@gmail.com</a></p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://x.com/?lang=en"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="https://www.instagram.com/"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-light btn-square" href="https://ke.linkedin.com/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Popular Courses</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white mb-2" href="/Coursemain?type=mathematics"><i className="fa fa-angle-right mr-2"></i>Mathematics</a>
                                    <a className="text-white mb-2" href="Coursemain?type=science"><i className="fa fa-angle-right mr-2"></i>Sciences</a>                       
                                    <a className="text-white mb-2" href="Coursemain?type=business"><i className="fa fa-angle-right mr-2"></i>Business</a>
                                    <a className="text-white" href="Coursemain?type=engineering"><i className="fa fa-angle-right mr-2"></i>Engineering</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="/">ICS GROUP 2A</a>. All Rights Reserved. Designed by ICS GROUP 2A</p>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            
        </div>
    );
}

export default Footer;
