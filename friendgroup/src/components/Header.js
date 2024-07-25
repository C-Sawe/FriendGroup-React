import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Signincomponents/LoginButton';
import LogoutButton from '../Signincomponents/LogoutButton';

function Header() {
  const { isAuthenticated, user } = useAuth0();

  const getUserRole = () => isAuthenticated && user ? 'Student' : 'Accounts';

  const getDashboardLink = () => getUserRole() === 'Student' ? '/dashboard' : '/dashboard';

  return (
    <div>
      {/* Topbar */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <a href="/" className="text-decoration-none">
              <h1 className="m-0"><span className="text-primary">F</span>RIEND GROUP</h1>
            </a>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                <small>Ole Sangale Road , Nairobi Kenya</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                <small>Friendgroup@gmail.com</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                <small>+254 999999999</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <NavLink to={getDashboardLink()} className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" style={{ height: '67px', padding: '0 30px', color: 'inherit' }}>
              <h5 className="text-primary m-0"><i className="fa fa fa-user mr-2"></i>{getUserRole()}</h5>
            </NavLink>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0"><span className="text-primary">F</span>RIEND GROUP</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav py-0">
                  <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Home</NavLink>
                  <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
                  <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">Courses</NavLink>
                  <NavLink to="/tutors" className="nav-item nav-link" activeClassName="active">Tutors</NavLink>
                  <NavLink to="/pricing" className="nav-item nav-link" activeClassName="active">Pricing</NavLink>
                  <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                </div>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </div>
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
