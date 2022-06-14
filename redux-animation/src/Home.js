import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Button className="m-5 nav bg-light">
            <Link
              to="/barchart"
              className="nav-link"
            >
              Bar Chart
            </Link>
          </Button>
          <Button className="m-5 nav bg-light">
            <Link
              to="/tree"
              className="nav-link"
            >
              Tree Node
            </Link>
          </Button>
          <Button className="m-5 nav bg-light">
            <Link
              to="/lightorb"
              className="nav-link"
            >
              Light Orb
            </Link>
          </Button>
        </Container>
      </div>
    )
  }
}

export default Home;