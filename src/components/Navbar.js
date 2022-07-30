import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css'

const NavbarComponent = () => {
  return (
    
    <header>
      <Navbar collapseOnSelect expand="lg"  variant="light" sticky="top" >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">Haris</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Work">Work</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    
  );
}

export default NavbarComponent;