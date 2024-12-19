import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () =>{
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/"><strong>Devotee Management System</strong></Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link as = {Link} to ="/" className="nav-link">Devotees</Nav.Link>
                    <Nav.Link as = {Link} to ="/devotee" className="nav-link">Post Devotee</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;