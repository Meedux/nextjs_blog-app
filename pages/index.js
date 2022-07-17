import React from "react";
import Row from "../components/styled/Row";
import Col from "../components/styled/Col";
import Container from "../components/styled/Container";
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
          <h1 className="text-4xl font-bold">Generic Title</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            pariatur minima, corrupti voluptate natus hic sunt atque rerum
            repellat id quos suscipit accusamus ab dolore adipisci earum
            blanditiis neque consectetur cum! Praesentium neque corrupti atque
            incidunt, animi saepe alias dolorem.
          </p>
        </div>

        <Container className="mt-4">
          <Row style="mb-5 pb-2">
            <Col style="flex justify-center">
              <ImgOverlay
                radius="200"
                width="500px"
                height="300px"
                src={blog}
              />
            </Col>
            <Col>
              <h1 className="text-2xl font-bold mb-3">Blogs and stuff</h1>
              <p className="lead text-start mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur tenetur esse labore est? Neque deserunt autem saepe
                ut sapiente nulla ipsam rem omnis labore itaque totam sed
                dolore, ea consectetur reprehenderit, repellat facilis
                laudantium vero nostrum modi culpa tempora alias veritatis
                quasi. Maxime quod sed nobis hic possimus deserunt repudiandae?
              </p>
              <Link href="/blogs">
                <a className="p-4 bg-gray-900 text-white rounded transition hover:bg-gray-500">
                  See More
                </a>
              </Link>
            </Col>
          </Row>

          <Row style='mb-5'>
            <Col>
              <h1 className="text-end text-2xl font-bold mb-3">About Us</h1>
              <p className="lead text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur tenetur esse labore est? Neque deserunt autem saepe
                ut sapiente nulla ipsam rem omnis labore itaque totam sed
                dolore, ea consectetur reprehenderit, repellat facilis
                laudantium vero nostrum modi culpa tempora alias veritatis
                quasi. Maxime quod sed nobis hic possimus deserunt repudiandae?
              </p>
              <Link href="/about">
              <a className="p-4 bg-gray-900 text-white rounded transition hover:bg-gray-500">
                See More
              </a>
              </Link>
            </Col>
            <Col style="flex justify-center">
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
