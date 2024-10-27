import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Sidebar for large screens */}
      <Navbar bg="light" expand="lg" className="d-none d-lg-flex flex-column vh-100" style={{ width: '250px' }}>
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Dropdown button for small screens */}
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Menu
      </Button>

      {/* Offcanvas for small screens */}
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#services" onClick={handleClose}>Services</Nav.Link>
            <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
