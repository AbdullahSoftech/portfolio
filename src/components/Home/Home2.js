import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import abdPic from "../../Assets/abdullah-pic.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A <b className="purple">Full Stack Developer</b> with <b className="purple">2 years</b> of hands-on experience designing and 
              delivering high-performance web systems. I write clean, reusable code across 
              the full stack, from pixel-perfect <b className="purple">Angular & React</b> interfaces to robust 
              <b className="purple"> .NET Core APIs</b> and optimized <b className="purple">SQL databases</b>.
              <br />
              <br />
              My core interests lie in building <i><b className="purple">intelligent web applications</b></i>, 
              leveraging <i><b className="purple">Artificial Intelligence</b></i> to solve real-world problems, and staying at the forefront of emerging technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={abdPic}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 4px 20px rgba(200, 137, 230, 0.5)",
                  objectFit: "cover",
                  maxWidth: "300px",
                  maxHeight: "300px",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
