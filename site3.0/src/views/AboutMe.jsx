import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

class AboutMe extends Component {

  render() {
    return (
      <div className="content">
        <Grid fluid>

          <Row>
            <Col md={8}>
              <Card
                id="chartHours"
                title="About Thiago Lago"
                category="Life.."
                content={
                  <div className="ct-chart">
                  <p style={{textAlign: 'justify', fontSize: 18}}>
                    Welcome! <br/><br/>

                    My name is Thiago, I'm 24 years old and I'm an technology enthusiast.
                    I am currently studying to become a full-stack developer.
                    <br/><br/>I have a degree in Business Administration and now I'm finishing my second year in Systems Analysis and Development. I have great interest in web programming, being one of the means that I like to study.
                    <br/><br/>I love music! in the off-hours play bass and counter-strike.
                    </p>
                  </div>
                }
              />
            </Col>
            {/* <Col md={4}>
              <Card
                title="Thiago Lago "
                category="Developer"
                content={
                  <div>
                    Some Informations Some Informations Some Informations Some Informations Some Informations Some Informations 
                    Some Informations Some Informations Some Informations Some Informations Some Informations Some Informations 
                  </div>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
