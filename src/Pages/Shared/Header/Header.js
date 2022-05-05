import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={25} src={logo} alt="" />
                        <span className='ps-2'>Book's World</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#books" className='effects'>Books</Nav.Link>
                            <Nav.Link href="home#bestselling" className='effects'>Best-Selling</Nav.Link>
                            <Nav.Link href="home#bestseller" className='effects'>Best-Writer</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blog" className='effects'>Blog</Nav.Link>
                            <Nav.Link as={Link} to="about" className='effects'>About</Nav.Link>
                            {user ? <button className='btn btn-link text-white effects text-decoration-none' onClick={handleSignOut}>Sign out <FiLogOut /> </button>
                                :
                                <Nav.Link as={Link} to="login" className='effects'>Sign In <FiLogIn /></Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;