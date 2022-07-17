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
                      <Link href="/">
                        <a style={{ textDecoration: 'none'}} className="me-3" >
                          Home
                        </a>
                      </Link>
                      <Link  href="/blogs">
                        <a style={{ textDecoration: 'none'}} className="me-3">

                          Blogs
                        </a>     
                      </Link>
                      <Link  href="/contacts">
                        <a style={{ textDecoration: 'none'}} className="me-3">
                          Contacts
                        </a>
                      </Link>
                      <Link href="/write">
                        <a style={{ textDecoration: 'none'}} className="me-3" >
                          Write a Blog
                        </a>
                      </Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      {/*<Outlet />*/}
    </>
  )
}

export default NavigationBar