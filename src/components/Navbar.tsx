import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className = "navbar navbar-expand-lg bg-body-tertiary" id = "main-nav">
      <div className = "container-fluid">
          <Link className = "navbar-brand" to=''>My Portfolio</Link>
          <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse"
              data-bs-target = "#navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id="navbarSupportedContent">
              <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                  <li className = "nav-item">
                    <Link className = "nav-link active" aria-current="page" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/trips'>Your Trips</Link>
                  </li>
                  <li className = "nav-item dropdown">
                      <a className = "nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Search
                      </a>
                      <ul className = "dropdown-menu">
                          <li>
                              <Link className = "dropdown-item" to='/search'>Parks/Trail</Link>
                          </li>
                          <li>
                              <div className = "dropdown-divider"></div>
                          </li>
                          <li><a className = "dropdown-item" href="#">In Develop</a></li>
                      </ul>
                  </li>
              </ul>
            </div>
      </div>
    </nav>
  )
}

export default Navbar;
