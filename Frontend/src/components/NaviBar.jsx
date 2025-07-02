
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { updateExerciseLog } from "../services/UserService";
// import { Link } from "react-router-dom";


export function NaviBar(){
    return(
        
        <Navbar expand="lg" data-bs-theme="dark" className="bg-body-dark">
        <Container>
          <Navbar.Brand href="#home">TRACK ME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to ="/">
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/home">
                <Nav.Link>Home </Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/about">
                <Nav.Link>About Us </Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/exerciselog">
                <Nav.Link>ExcerciseLog</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/loglists">
                <Nav.Link>Loglists</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/register">
                <Nav.Link>Register</Nav.Link>
                </LinkContainer>
               
            </Nav>
            <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>








    );
}