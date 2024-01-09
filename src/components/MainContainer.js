import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";
import { FaSortAlphaDown } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import { FaCircleChevronDown } from "react-icons/fa6"
import { RiMessage2Fill } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci"


const MainContainer = () => {
    const appStyle = {
   
        width: "76vw",
        marginTop: '-10px',
      };
    return (
        <div className="MainContainer">
            {/* MainContainer works */}
            {/* MainContainer content goes here */}
            <div style={{margin:'0px', width:'110'}}>
            <img src={require('./1.png')} height={200} width={1000}/>
            <div className="App" style={appStyle}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Form className="d-flex">
          
          <Form.Control
            type=" search "
            placeholder="Search by order id"
            className="mr-2 w-100"
            aria-label="Search"
          />
        </Form>
        {/* <Navbar.Brand href="#">Payments</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
         
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
         

            <Nav.Link href="#" disabled className="m-2">
            <FaSortAlphaDown />
            </Nav.Link>
            <Nav.Link href="#" disabled className="m-2">
            <IoDownloadOutline />
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div style={{margin:'0px', width:'110'}}>
            <img src={require('./4.png')} height={100} width={1000}/>
            </div>
            </div>
        </div>
    );
};

export default MainContainer;