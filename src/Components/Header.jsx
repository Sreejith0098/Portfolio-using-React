import React from "react";
import logo from "../assets/logo.png"
   
const Header = () => {
  return (
    <>
     <nav class="navbar fixed-top" style={{backgroundColor:'#712cf9'}} >
  <div class="container-fluid">
   <div style={{width:'90px', height:'40px'}}>
   <img style={{width:'70px',height:'50px'}} className="img-fluid" src={logo} alt="" />
   </div>
    <button  class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span style={{color:'aqua'}} class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end container" style={{backgroundColor:'#712cf9', width:'300px'}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header"  >
        <h3 class="offcanvas-title" style={{color:'aqua'}}  id="offcanvasNavbarLabel">Qick Links</h3>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" >
        <ul style={{fontSize:'20px'}} class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <a  style={{color:'aqua'}} class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a  style={{color:'aqua'}} class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a style={{color:'aqua'}}  class="nav-link active" aria-current="page" href="#contact">Contact</a>

          </li>
          
         
        </ul>
        <form class="d-flex mt-3" role="search">
        </form>
      </div>
    </div>
  </div>
</nav>

  </>
  );
}
export default Header;
