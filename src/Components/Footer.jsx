import { Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section py-5 mt-5">
        <div style={{ color: "aqua" }} className="container">
          <div className="row align-items-start gy-4">
            {/* Branding */}
            <div className="col-md-4">
              <h4 className="footer-brand">Sreejith R</h4>
              <p style={{ color: "aqua" }} className=" small">
                Front-End Web Developer specialized in React, Node.js & modern
                web technologies.
              </p>
            </div>

            {/* Navigation */}
            <div className="col-md-4">
              <h6 className="mb-3">Quick Links</h6>
              <ul className="list-unstyled">
               
                <li>
                  <a
                    style={{ textDecoration: "none", color: "aqua" }}
                    href="#skills"
                    className="footer-link"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "aqua" }}
                    href="#projects"
                    className="footer-link"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "aqua" }}
                    href="#contact"
                    className="footer-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-md-4 ">
              <h6 className="mb-3">Connect with me</h6>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className=""
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Sreejith0098"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ color: "aqua" }}
                    className="bi bi-github footer-icon"
                  >
                    github
                  </i>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/sreejith-r-57707725b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ color: "aqua" }}
                    className="bi bi-linkedin footer-icon"
                  >
                    Linkedin
                  </i>
                </a>
              </div>
            </div>
          </div>

          <hr style={{ color: "aqua" }} className="my-4" />

          {/* Copyright */}
          <p style={{ color: "aqua" }} className="text-center small">
            &copy; All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
