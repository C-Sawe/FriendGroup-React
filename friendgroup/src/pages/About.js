import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
    

      {/* Header Start */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
            <h3 className="display-4 text-white text-uppercase">About</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">About</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-4 mb-lg-0" src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png" alt="About" />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>About Us</h5>
                <h1>Innovative Way To Learn</h1>
              </div>
              <p>Welcome to our community of learners! At our core, we believe in the power of peer-to-peer learning and the remarkable potential it holds to transform education. Our platform is designed to create an environment where intuitive learning flourishes, driven by the collective wisdom and experience of peers.</p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Registration Start */}
      <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Need Any Courses</h5>
                <h1 className="text-white">30% Off For New Students</h1>
              </div>
              <p className="text-white">We understand that learning is Link dynamic process, and the best insights often come from those who are navigating the same journey. By fostering Link collaborative space, we make it easy for individuals to connect, share knowledge, and support each other’s growth.</p>
              <ul className="list-inline text-white m-0">
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Get tailored assistance from peers who understand your learning journey.</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i> Learn at your own pace and convenience with peers who share similar schedules.</li>
                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Gain insights from peers with varied backgrounds and experiences.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Registration End */}

      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Tutors</h5>
            <h1>Meet Our Tutos</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="/assets/img/team-2.jpg" alt="Tutor
                " />
                <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-primary text-center opacity-0 team-overlay">
                  <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://x.com/?lang=en"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-square" button="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
              <h4>Ouma John</h4>
              <i>Algebra</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="Tutor
                " />
                <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-primary text-center opacity-0 team-overlay">
                  <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://x.com/?lang=en"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-square" button="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
              <h4>Jane Odaro</h4>
              <i>Design</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt="Tutor
                " />
                <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-primary text-center opacity-0 team-overlay">
                  <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://x.com/?lang=en"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-square" button="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
              <h4>Jane wamburu</h4>
              <i>Chemistry</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="/assets/img/team-4.jpg" alt="Tutor " />
                <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-primary text-center opacity-0 team-overlay">
                  <div className="d-flex justify-content-center">
                  <Link className="btn btn-outline-light btn-square mr-2" button="https://x.com/?lang=en"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-square mr-2" button="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-square" button="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
              <h4>John Galvanised</h4>
              <i>Mathematics</i>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}


     
    </div>
  );
}

export default About;
