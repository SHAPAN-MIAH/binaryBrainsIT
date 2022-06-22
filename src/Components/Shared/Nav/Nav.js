import React from "react";
import './Nav.css'
import logo from '../../../assets/images/logo/BBIT.png'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img  width='50px' src={logo} alt=""/> <span className="brandName1">Binary</span> <span className="brandName2">Brains</span> <span className="brandName3">IT</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 navManu">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Team
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      Why Choose Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Methodology
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
