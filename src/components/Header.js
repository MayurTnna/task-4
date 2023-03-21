import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../assets/scss/main.scss"


function Header() {
  return (
    <Navbar bg="dark"  expand="lg" >
      <Container fluid>
        <Navbar.Brand className="text-white px-5" href="#">My Online Shopping Cart</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Form className="px-5   ">
            <Button  className="px-5 text-white" variant="outline-success">My Cart</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
