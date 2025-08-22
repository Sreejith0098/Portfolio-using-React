import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="footer-section py-5 mt-5">
      <div style={{color:'aqua'}}  className="container">
        <div className="row align-items-start gy-4">
          {/* Branding */}
          <div className="col-md-4">
            <h4 className="footer-brand">Sreejith R</h4>
            <p style={{color:'aqua'}} className=" small">
              Front-End Web Developer specialized in React, Node.js & modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a   style={{textDecoration:'none',color:'aqua'}} href="#home" className="footer-link">Home</a></li>
              <li><a   style={{textDecoration:'none',color:'aqua'}} href="#about" className="footer-link">About</a></li>
              <li><a style={{textDecoration:'none',color:'aqua'}} href="#skills" className="footer-link">Skills</a></li>
              <li><a style={{textDecoration:'none',color:'aqua'}} href="#projects" className="footer-link">Projects</a></li>
              <li><a style={{textDecoration:'none',color:'aqua'}} href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div  className="col-md-4 ">
            <h6 className="mb-3">Connect with me</h6>
            <div className="d-flex gap-3">
              <a  style={{textDecoration:'none'}} href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <i style={{color:'aqua'}} className="bi bi-github footer-icon">github</i>
              </a>
              <a style={{textDecoration:'none'}} href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <i style={{color:'aqua'}} className="bi bi-linkedin footer-icon">Linkedin</i>
              </a>
             
            </div>
          </div>
        </div>

        <hr style={{color:'aqua'}} className="my-4" />

        {/* Copyright */}
        <p style={{color:'aqua'}}  className="text-center small">
          &copy; Your Name. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer