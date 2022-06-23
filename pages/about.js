import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'
import ImgOverlay from '../components/ImgOverlay'
import img from './../assets/img/about_page_img.jpg'

const AboutUs = () => {
  return (
    <>
      <Container className="pt-3">
          <h1 className="text-center mb-5">About us</h1>
          <Row>
            <Col className="d-md-flex justify-content-center d-none">
              <ImgOverlay src={img} height="550px" width="100%"/>
            </Col>
            <Col>
              <p className="lead text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil veritatis quaerat quibusdam ea nemo quo saepe rem ipsum. Iusto, deleniti! Necessitatibus, tenetur laudantium maxime tempore ex temporibus quibusdam veniam perferendis optio voluptatum nostrum minus. Recusandae, fugit saepe quibusdam consequuntur aspernatur maxime ea velit similique debitis qui hic suscipit culpa amet soluta blanditiis temporibus voluptas iure! Fugit reprehenderit sit, facere aspernatur mollitia temporibus? Rerum, sit? Minus neque ea odit sit asperiores alias ut dolore voluptate laborum, natus a consequuntur optio molestias pariatur libero dignissimos eum! Quasi quidem iure hic illum iusto non sint temporibus harum, similique modi labore deserunt nulla! Labore distinctio placeat autem consectetur sit expedita sed, officiis facilis libero velit quaerat modi dicta aliquam repudiandae vitae provident molestiae corrupti dolorem quod, illum cumque. Ea neque iure vero distinctio. Quo explicabo sunt consequuntur eius perspiciatis. Nemo doloribus facere delectus vel mollitia cupiditate, fuga ipsum, libero nisi ut odit quos consectetur.
              </p>
            </Col>
          </Row>
      </Container>

      <Footer />
    </>
  )
}

export default AboutUs