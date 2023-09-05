import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand><a class="navbar-brand" href="#">
                        <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/the_movie_database_logo_icon_144804.png" width="60" height="40"/>
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link >Trending</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
