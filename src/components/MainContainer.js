import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaSortAlphaDown } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import { FaCircleChevronDown } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";

const MainContainer = () => {
  const appStyle = {
    width: "76vw",
    marginTop: "-10px",
    backgroundColor: "#f5f5f5",
  };
  const divStyle1 = {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  };
  const divStyle2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent:
      "space-between" /* Align items at both ends along the main axis */,
    alignItems: "flex-start",
    width: "65vw",
    margin: "20px",
  };
  const divStyle3 = {
    border: "1px solid",
    paddingInline: "5px",
    borderRadius: "5px",
    background: "white",
  };
  const divStyle4 = {
    fontWeight: "bold",
  };
  const divStyle5 = {
    fontWeight: "bold",
    background: "white",
    width: "30vw",
    padding: "10px",
  };

  const divStyle6 = {
    fontWeight: "bold",
    background: "white",
    width: "70vw",
    height: "100vh",
    padding: "10px",
  };
  const divStyle7 = {
    marginLeft: "20vw",
  };

  const divStyle8 = {
    display: "flex",
    // fontWeight: "bold",
    flexDirection: "row",
    justifyContent:
      "space-between" /* Align items at both ends along the main axis */,
    alignItems: "flex-start",
    width: "68vw",
    marginTop: "20px",
    background: "#f5f5f5",
    padding: "10px",
  };


  return (
    <div className="MainContainer" style={divStyle7}>
      {/* MainContainer works */}
      {/* MainContainer content goes here */}
      <div style={{ margin: "0px", width: "110" }}>
        {/* <img src={require('./1.png')} height={200} width={1000}/> */}
        <div className="App" style={appStyle}>
          <div style={divStyle1}>
            <div style={divStyle2}>
              <div style={divStyle4}>Overview</div>
              <div style={divStyle3}>
                Last Month
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>

            <div style={divStyle2}>
              <div style={divStyle5}>
                <div>Online Order</div>

                <h2>123</h2>
              </div>
              <div style={divStyle5}>
                <h6>Amount Recieved</h6>

                <h2>Rs 23,92,312.19</h2>
              </div>
            </div>
          </div>

          <div style={divStyle1}>
            <div style={divStyle2}>
              <div style={divStyle4}>Transaction | This Month</div>
            </div>

            <div style={divStyle2}>
              <div style={divStyle6}>
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
                        style={{ maxHeight: "100px" }}
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

                <div>
                  <div style={divStyle8}>
                    <div>order id</div>
                    <div>order date</div>
                    <div>order amount</div>
                    <div>Transaction Fees</div>
                  </div>
                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>

                  <div style={divStyle2}>
                    <a href="#">#123456</a>
                    <h6>7 July 23</h6>
                    <h6>Rs 1234</h6>
                    <h6>Rs 22</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{margin:'0px', width:'110'}}>
            <img src={require('./4.png')} height={100} width={1000}/>
            </div> */}
      </div>
    </div>
  );
};

export default MainContainer;
