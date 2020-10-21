import React from 'react';
import '../../Style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className = "NavLinks" href="#home">Home</Link>
                    <Link className = "NavLinks" href="#features">Authors</Link>
                    <Link className = "NavLinks" href="#features">Books</Link>
                    <Link className = "NavLinks" href="#pricing">Connect</Link>
                    <Link className = "NavLinks" href="#pricing">About</Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}

export default NavigationBar;
