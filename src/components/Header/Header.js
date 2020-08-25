import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import Logo from '../../assets/logomain.png'
export default function Header() {
  return (
    <Navbar  expand="lg" className="navbar">
    <img src={Logo} alt="logo" className="logomain" />
    <Form>
        <FormControl type="text" placeholder="Try 'Maceió'" size="lg"/>
      </Form>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav id="eachnav">
        <Nav.Link href="#anfritao" >Become a host</Nav.Link>
        <Nav.Link href="#salvos">Saved</Nav.Link>
        <Nav.Link href="#viagens">Travel</Nav.Link>
        <Nav.Link href="#msg">Posts</Nav.Link>
        <Nav.Link href="#ajuda">Help</Nav.Link>
        <Nav.Link href="#creditos">Credits</Nav.Link>
      </Nav>
      <Link >
            <button className="new">
               Register your property
            </button>
        </Link>
    </Navbar.Collapse>
  </Navbar>
  );
}
