import React, { Component } from "react";
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    general
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business">business </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">health </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">science </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">sports </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">technology </Link></li>   
                  
                  
               
                
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
