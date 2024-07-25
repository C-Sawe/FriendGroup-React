
import React from 'react';
import SignupButton from '../Signincomponents/signupButton';

const Pricing = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
            <h3 className="display-4 text-white text-uppercase">PRICING</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><a className="text-white" href="/Home">Home</a></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">PRICING</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Pricing Plans Start */}
      <div className="container py-5">
        <div className="row">
          {/* Free Plan */}
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">Free Plan</h5>
                <h3 className="card-text">ksh 0<span className="text-muted">/month</span></h3>
                <ul className="list-unstyled">
                  <li>Access to limited content</li>
                  <li>Advertisements included</li>
                  <li>No scheduling of meetings</li>
                </ul>
                <a href="/SigninSignup" className="btn btn-primary">Sign Up for Free</a>
              </div>
            </div>
          </div>
          {/* Premium Plan */}
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">Premium Plan</h5>
                <h3 className="card-text">ksh 2000<span className="text-muted">/month</span></h3>
                <ul className="list-unstyled">
                  <li>Unrestricted access to all content</li>
                  <li>No advertisements</li>
                  <li>Schedule meetings with tutors</li>
                </ul>
                <SignupButton/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plans End */}
    </div>
  );
};

export default Pricing;
