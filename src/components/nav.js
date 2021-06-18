import { Link } from "gatsby"
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Nav extends Component {
  constructor(props){
    super(props);

    this.toggleNav= this.toggleNav.bind(this)
    this.state = {
      active: false
    }
  }

  toggleNav() {
    const currentstate = this.state.active
    this.setState({active: !currentstate})
  }

  render() {
    return(
      <div>
        <nav className={this.state.active ? 'nav-open' : 'nav-closed'}>
          <ul>
            <li>
              <Link to="/">Why 365?</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/" className="btn green-btn">Shop Templates</Link>
            </li>
          </ul>
        </nav>
        <button className={this.state.active ? 'nav-toggle nav-toggle-blue' : 'nav-toggle'} onClick={this.toggleNav}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div>
    );
  }
}

export default Nav