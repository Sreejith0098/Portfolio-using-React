
import { Link } from "react-router-dom";

const HeroSection = () => {
  
  return (
    <>
      <div style={{ height: "80vh" }} className="container row ms-5 me-5 mt-5" >
        {/* text section */}
        <div
          style={{ marginTop: "130px", fontFamily: "serif" }}
          className="col-lg-6 text-light "
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
            href=""
          >
            {" "}
            Contack me
          </a>
        </div>
        <div className="col-lg-6 "   >
          <img
            className="img-fluid"
            src="https://img.freepik.com/premium-vector/asian-men-avatar_7814-345.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
