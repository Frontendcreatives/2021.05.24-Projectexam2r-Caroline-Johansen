import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo_lg from "../../images/logo_lg.png"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';



export const Navbars = () => (
 
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src={logo_lg} alt="logo frontendpedia"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            
          <Nav.Item><Nav.Link href="/"><HomeIcon/></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Login"><PersonIcon/></Nav.Link></Nav.Item>
      
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
 
);
