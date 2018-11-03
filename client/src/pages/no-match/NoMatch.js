import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

/*  This styling of the 404 page is currently borrowed from/
    identical to the books file at present. Less critical than
    the other changes, but we can obviously change how we see fit.
*/ 

import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

// import other style items from components folder
//
//
//
//
//
//

const NoMatch = () => (
    console.log("The page you have requested has not been found.")
    );  
    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>


export default NoMatch;
