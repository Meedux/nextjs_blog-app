import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaAddressCard, FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Footer from '../components/Footer'


const Contacts = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">
              Contact us
            </h1>
            <p className="lead text-center mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sapiente asperiores quasi beatae veniam, at deserunt reiciendis minima autem labore tempore id blanditiis repudiandae consectetur, error dicta excepturi facilis suscipit.
            </p>
            <h4>Contacts</h4>
            <ul id="contact-list" className="list-unstyled">
              <li><FaAddressCard /> 170 Homewood Street Milwaukee, WI 53204</li>
              <li><FaPhoneAlt /> +1-202-555-0171</li>
              <li><HiOutlineMail /> yonim53181@dilanfa.com</li>
            </ul>
          </Col>
          <Col>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="I would like to hear Daily Newsletters" />
            </Form.Group>

            <Button variant="primary">
              Subscribe
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>

      <Footer style={{marginTop: "18em"}}/>
    </>
  )
}

export default Contacts