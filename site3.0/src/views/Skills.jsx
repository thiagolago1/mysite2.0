import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

class Skills extends Component {
  render() {
    return (
      <div className="content">
      <Grid fluid>

        <Row>
          <Col md={8}>
            <Card
              id="chartHours"
              title="Skills"
              category="My Skills"
              content={
                <div className="ct-chart">
                <p style={{textAlign: 'justify', fontSize: 18}}>
                 JavaEE, ReactJs, Python, Django, Html, JavaScript, CSS
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

export default Skills;
