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
                      <Link style={{ textDecoration: 'none'}} className="me-3" to="/">Home</Link>
                      <Link style={{ textDecoration: 'none'}} className="me-3" to="/blogs">Blogs</Link>
                      <Link style={{ textDecoration: 'none'}} className="me-3" to="contacts">Contacts</Link>
                      <Link style={{ textDecoration: 'none'}} className="me-3" to="write">Write a Blog</Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      {/*<Outlet />*/}
    </>
  )
}

export default NavigationBar