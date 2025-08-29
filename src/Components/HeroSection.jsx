import { Link } from "react-router-dom";
import profile from '../assets/profile.png'
import '../App.css'

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ minHeight: "88vh", paddingTop: '140px' }}>
        <div className="row align-items-center justify-content-center">
          {/* text section */}
          <div
            style={{ fontFamily: "serif" }}
            className="col-lg-6 col-md-8 col-12 pe-lg-3 text-light text-center text-lg-start order-2 order-lg-1 mt-4 mt-lg-0"
          >
            <div style={{ marginTop: "60px" }} className="mt-md-4 mt-lg-5">
              Hello Everyone!
              <h1 className="display-5 display-md-4">
                <span className="text-light"> I'm </span>
                <span style={{ color: "aqua" }}>Sreejith R</span>
              </h1>
              <p className="fs-6 fs-md-5">
                Hi, I'm Sreejith R, a passionate web developer with a focus on
                creating clean, responsive, and user-friendly websites and web
                applications. I specialize in front-end development using HTML, CSS,
                JavaScript, and modern frameworks like React and Vue.js, as well as
                back-end technologies such as Node.js and Express.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
                <Link 
                  to={'/resume'} 
                  style={{ backgroundColor: "#6f42c1", color: 'aqua' }} 
                  className="btn mt-3 mb-2 mb-sm-0"
                >
                  View resume
                </Link>
                <a
                  className="btn mt-3 ms-sm-3"
                  style={{ backgroundColor: "#6f42c1", color: 'aqua' }}
                  href="#contact"
                >
                  Contact me
                </a>
              </div>
              
              <div className="mt-3 d-flex justify-content-center justify-content-lg-start">
                <div>
                  <a 
                    style={{ textDecoration: 'none', color: 'aqua' }} 
                    href="https://www.linkedin.com/in/sreejith-r-57707725b/"
                  >
                    <i className="fa-brands fa-linkedin fs-3 fs-md-2"></i>
                  </a>
                </div>
                <div className="ms-2">
                  <a style={{ textDecoration: 'none', color: 'aqua' }} href="">
                    <i className="fa-brands fa-github fs-3 fs-md-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image section */}
          <div className="col-lg-6 col-md-8 col-10 mb-4 d-flex justify-content-center order-1 order-lg-2">
            <div 
              style={{
                borderRadius: '50%',
                borderColor: 'aqua',
                borderStyle: 'double',
                border: '1px solid aqua',
                aspectRatio: '1/1',
                maxWidth: '500px',
                width: '100%'
              }} 
              className="p-3 glow-border d-flex align-items-center justify-content-center"
            >
              <img
                className="img-fluid rounded-circle"
                style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'cover' }}
                src={profile}
                alt="Sreejith R Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;