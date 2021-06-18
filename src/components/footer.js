import { Link } from "gatsby"
import React from "react"

import Logo from "../images/365templates-logo.png"

const Footer = () => (
  <footer className="footer-wrapper container-fluid">
    <div className="container">
      <div className="col-xs-6">
        <ul className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Why 365?</Link></li>
          <li><Link to="/">Browse Templates</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </div>
      <div className="col-xs-6">
        <address>
          365 Degree Total Marketing<br />
          153 Follins Lane<br />
          St. Simon's Island, GA 31522<br />
          <a href="tel:+18006975568">800.697.5568</a>
        </address>
      </div>

      <img src={Logo} className="img-responsive" alt="365 Degree Total Marketing"/>
      <p className="col-xs-12 text-center">© {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
