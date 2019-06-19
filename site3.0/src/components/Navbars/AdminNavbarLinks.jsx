import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class AdminNavbarLinks extends Component {

  goPageLinkedin = () => {
    document.location.href = "https://www.linkedin.com/in/thiago-lago-680958156/"
  }

  goPageGithub = () => {
    document.location.href = "https://github.com/thiagolago1"
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            {/* <i className="fa fa-dashboard" /> */}
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={this.goPageLinkedin}>
            LinkedIn
          </NavItem>
          <NavItem eventKey={3} onClick={this.goPageGithub}>
            GitHub
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
