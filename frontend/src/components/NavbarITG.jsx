import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css'

class NavbarITG extends Component {

  render() {
    return (
      <>
        <Navbar className="color-nav" collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">INSTITUTO TECNOLÓGICO DE GUAYMAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="color-nav" href="#features">Institución</Nav.Link>
              <NavDropdown className="color-nav" title="Oferta académica" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Licenciado en administración</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown className="color-nav" title="Alumnos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hackathon</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="color-nav" href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarITG;