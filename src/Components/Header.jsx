import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top" style={{ backgroundColor: "#712cf9" }}>
        <div className="container-fluid">
          <div style={{ width: "90px", height: "40px" }}>
            <img
              style={{ width: "70px", height: "50px" }}
              className="img-fluid"
              src={logo}
              alt=""
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span style={{ color: "aqua" }} className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end container"
            style={{ backgroundColor: "#712cf9", width: "300px" }}
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h3
                className="offcanvas-title"
                style={{ color: "aqua" }}
                id="offcanvasNavbarLabel"
              >
                Qick Links
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                style={{ fontSize: "20px" }}
                className="navbar-nav justify-content-end flex-grow-1 pe-3"
              >
                <li className="nav-item">
                  <a style={{ color: "aqua",textDecoration:'none' }} classNa="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "aqua" }}
                    className="nav-link"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "aqua" }}
                    className="nav-link active"
                    aria-current="page"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search"></form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
