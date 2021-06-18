import { Link } from "gatsby"
import React, { Component } from "react"
import Nav from "./nav"

import Logo from "../images/365templates-logo.png"

class Header extends Component {

  render() {
    return(
      <div>
        <header className="container-fluid">
          <div className="row">
            <div className="header-wrapper container">
              <div>
                <Link to="/">
                  <img src={Logo} alt="365 Degree Total Marketing Logo"/>
                </Link>
              </div>

              <Nav />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header
