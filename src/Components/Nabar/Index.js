import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav, Form,NavDropdown,FormControl,Button,NavItem } from "react-bootstrap";
import Index from "../Sider/Index";
 

function Navbar1() { 
  const [islogin, setIslogin] = React.useState(true);
  return (
    <div  >
    <Navbar  className="Mainnav" expand="lg">
  <Container >
    <Navbar.Brand href="#"> 
    <img className="logo" src="logo1.png" alt=""/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll"> 
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"> </Nav.Link>
        <Nav.Link href="#action2"> </Nav.Link>
       
        <Nav.Link href="#" disabled>
          
        </Nav.Link>
        {islogin ? (
          <NavItem>
            
              <Button
                className="btn-round"
                color="danger"
                // href="/profile-page"
              >
                <i className="nc-icon nc-single-02"></i> Profile
              </Button>
            
          </NavItem>
        ) : (
          <NavItem>
             
              <Button
                className="btn-round"
                color="danger"
                // href="/signIn-page"
              >
                <i className="nc-icon nc-single-02"></i> Sign In
              </Button>
       
          </NavItem>
        )}
      </Nav>
      
      <Form className="d-flex">
        <FormControl
        style={{width: "20rem"}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Index/>
    </Navbar.Collapse>
   
  </Container>
</Navbar>
    </div>
  );
}

export default Navbar1;
