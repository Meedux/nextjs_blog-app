import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import ImgOverlay from "./../components/ImgOverlay";
import Footer from "../components/Footer";
import blog from "../assets/img/blog.jpg";
import about from "../assets/img/about.jpg";

const Home = () => {
  return (
    <>
      <Container className="mb-5">
        <div className="text-center mb-4 pb-3">
          <h1>Generic Title</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            pariatur minima, corrupti voluptate natus hic sunt atque rerum
            repellat id quos suscipit accusamus ab dolore adipisci earum
            blanditiis neque consectetur cum! Praesentium neque corrupti atque
            incidunt, animi saepe alias dolorem.
          </p>
        </div>

        <Container className="mt-4">
          <Row className="mb-5 pb-2">
            <Col className="d-flex justify-content-center">
              <ImgOverlay
                radius="200"
                width="500px"
                height="300px"
                src={blog}
              />
            </Col>
            <Col>
              <h1>Blogs and stuff</h1>
              <p className="lead text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur tenetur esse labore est? Neque deserunt autem saepe
                ut sapiente nulla ipsam rem omnis labore itaque totam sed
                dolore, ea consectetur reprehenderit, repellat facilis
                laudantium vero nostrum modi culpa tempora alias veritatis
                quasi. Maxime quod sed nobis hic possimus deserunt repudiandae?
              </p>
              <Link className="btn btn-outline-primary" href="/blogs">
                See More
              </Link>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 className="text-end">About Us</h1>
              <p className="lead text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur tenetur esse labore est? Neque deserunt autem saepe
                ut sapiente nulla ipsam rem omnis labore itaque totam sed
                dolore, ea consectetur reprehenderit, repellat facilis
                laudantium vero nostrum modi culpa tempora alias veritatis
                quasi. Maxime quod sed nobis hic possimus deserunt repudiandae?
              </p>
              <Link
                className="btn btn-outline-primary text-right"
                href="/about"
              >
                See More
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <ImgOverlay
                src={about}
                radius="200"
                width="500px"
                height="300px"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
