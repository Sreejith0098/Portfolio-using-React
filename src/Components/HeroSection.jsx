
import { Link } from "react-router-dom";
import profile from '../assets/profile.png'
const HeroSection = () => {
  
  return (
    <>
      <div style={{ height: "88vh",paddingTop:'180px' }} className="container row ms-5 me-5 " >
        {/* text section */}
        <div
          style={{ marginTop: "130px", fontFamily: "serif" }}
          className="col-lg-6 pe-3 text-light "
        >
          Hello Everyone!
          <h1>
            {" "}
            <span className="text-light"> I'm </span>{" "}
            <span style={{ color: "aqua" }}>Sreejith R</span>
          </h1>
          <p>
            Hi, I'm Sreejith R, a passionate web developer with a focus on
            creating clean, responsive, and user-friendly websites and web
            applications. I specialize in front-end development using HTML, CSS,
            JavaScript, and modern frameworks like React and Vue.js, as well as
            back-end technologies such as Node.js and Express.
          </p>
          <Link style={{ backgroundColor: "#6f42c1",color:'aqua' }} className="btn mt-3">
            View resume
          </Link>
          <a
            className="btn ms-3 mt-3 "
            style={{ backgroundColor: "#6f42c1",color:'aqua' }}
            href="#contact"
          >
            {" "}
            Contack me
          </a>
          <div className="mt-3 d-flex ">
            <div  >
                <a style={{textDecoration:'none', color:'aqua' }} href="https://www.linkedin.com/in/sreejith-r-57707725b/">
                <i  className="fa-brands fa-linkedin fs-3  "></i>
                </a>
            </div>

            <div className="ms-2"  >
                <a style={{textDecoration:'none',color:'aqua'}} href="">
                <i className="fa-brands fa-github fs-3"></i> 

                </a>
            </div>
         
          </div>
         
        </div>
        <div className="col-lg-6 mb-4 "   >
          <img
            className="img-fluid"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
