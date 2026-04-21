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
              A <b className="purple">Full Stack Developer</b> with <b className="purple">2+ years</b> of hands-on experience in <b className="purple">Angular</b> and <b className="purple">React.js</b>, and <b className="purple">1+ year</b> with <b className="purple">ASP.NET Core</b> and <b className="purple">SQL Server</b>. I build scalable web applications using modern frameworks like <b className="purple">Angular 17</b> with <b className="purple">RxJS & Signals</b>, and develop robust APIs using <b className="purple">.NET 8</b> and <b className="purple">Clean Architecture</b> patterns. Skilled in database design, API optimization, and implementing microservices architectures.
              <br />
              <br />
              My core interests lie in building <i><b className="purple">scalable web applications</b></i>, <i><b className="purple">blockchain integration</b></i> with Web3 technologies, and leveraging <i><b className="purple">Artificial Intelligence</b></i> to solve real-world problems. Passionate about clean code practices and staying at the forefront of emerging technologies.
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
