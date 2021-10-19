import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="">ARM</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        <Navbar.Text>
                            {user?.displayName && <>Signed in as: {user?.displayName}</>}
                        </Navbar.Text>

                        {user.email ? <Button onClick={logOut}> Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;