import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";

import { FaCircleChevronDown } from "react-icons/fa6"
import { RiMessage2Fill } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci"

function NavBar() {
    const appStyle = {
   
        width: "76vw",
        marginLeft: '20vw',
      };
      const divStyle7 = {
        marginLeft: '20vw',
       
      };
  return (
    <div className="App" style={appStyle}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Payments</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><CiCircleQuestion /> Home it Work</Nav.Link>

         
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
          
            <Form.Control
              type=" search "
              placeholder="Search features, tutorial etc"
              className="mr-2 w-100"
              aria-label="Search"
            />
          </Form>

            <Nav.Link href="#" disabled className="m-2">
               <RiMessage2Fill />  
            </Nav.Link>
            <Nav.Link href="#" disabled className="m-2">
            <FaCircleChevronDown /> 
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;

// const Navbar = () => {
//     return (
//         <div className="Navbar">
//             Navbar works
//             {/* Navbar content goes here */}
//         </div>
//     );
// };

// export default Navbar;