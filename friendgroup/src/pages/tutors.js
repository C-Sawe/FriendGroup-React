import React from 'react';
import { Link } from 'react-router-dom';

const Tutors = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
            <h3 className="display-4 text-white text-uppercase">Tutors</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link to="/home" className="text-white">Home</Link></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Tutors</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Tutors</h5>
            <h1>Meet Our Teachers</h1>
          </div>
          <div className="row">
            {/* Sample team item structure */}
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt="John Doe" />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-square mx-1" href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            {/* Repeat for other teachers */}
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
}

export default Tutors;
