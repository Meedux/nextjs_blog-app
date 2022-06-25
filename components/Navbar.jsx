import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'
import { FaBlogger } from 'react-icons/fa'
import Link from 'next/link'

const NavigationBar = () => {
  return (
    <>
      <Navbar color="light" expand="lg" className="mb-4">
          <Container>
              <Navbar.Brand href=""><FaBlogger size={50}/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                      <Nav.Link style={{ textDecoration: 'none'}} className="me-3" href="/">
                        Home
                        </Nav.Link>
                      <Nav.Link style={{ textDecoration: 'none'}} className="me-3" href="/blogs">Blogs</Nav.Link>
                      <Nav.Link style={{ textDecoration: 'none'}} className="me-3" href="contacts">Contacts</Nav.Link>
                      <Nav.Link style={{ textDecoration: 'none'}} className="me-3" href="write">Write a Blog</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      {/*<Outlet />*/}
    </>
  )
}

export default NavigationBar