import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import linkedin from "assets/img/linkedin.png";
import instagram from "assets/img/instagram.png"
import github from "assets/img/github.png"

class SocialMedias extends Component {

goPageLinkedin = () => {
  document.location.href = "https://www.linkedin.com/in/thiago-lago-680958156/"
}

goPageGithub = () => {
  document.location.href = "https://github.com/thiagolago1"
}

goPageInstagram = () => {
  document.location.href = "hhttps://www.instagram.com/thiagolagoo/"
}


  render() {
    return (
      <div className="content">
        <div className="content">
        <Grid fluid>

          <Row>
          <Col md={3}>
              <Card
                title="LinkedIn"
                category="Access to view my perfil"
                content={
                  <div>
                  <a href="#" onClick={this.goPageLinkedin}>
                  <img src={linkedin} onClick={this.goPageLinkedin} alt="logo_linkedin" style={{width: 70}}/>
                  </a>
                  </div>
                }
              />
            </Col>
            <Col md={3}>
              <Card
                title="GitHub"
                category="My work and personal studies"
                content={
                  <div>
                  <a href="#" onClick={this.goPageGithub}>
                  <img src={github} onClick={this.goPageGithub} alt="logo_linkedin" style={{width: 103}}/>
                  </a>
                  </div>
                }
              />
            </Col>
            <Col md={3}>
              <Card
                title="Instagram"
                category="My Life"
                content={
                  <div>
                  <a href="#" onClick={this.goPageInstagram}>
                  <img src={instagram} onClick={this.goPageInstagram} alt="logo_linkedin" style={{width: 70}}/>
                  </a>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
      </div>
    );
  }
}

export default SocialMedias;
