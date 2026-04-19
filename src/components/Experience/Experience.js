import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
    const sevrinDesc = <>
                  Building and optimizing <span className="purple">Dialog & Dialog Admin</span> a SaaS-based Stakeholder Engagement and Workflow Management Platform. Responsible for developing scalable Angular components, integrating REST APIs, and implementing performance optimizations including lazy loading and change detection strategies. Also contributing to backend development by designing RESTful services using ASP.NET Web API and C#.
                </>;
    const esoftageDesc = <>
                  Developed <span className="purple">ButterFactory</span>, a decentralized investment application on the Solana blockchain with automated risk-based portfolio management. Built interactive <span className="purple">Butter Dashboard</span> for real-time on-chain data visualization, integrated Solana wallet connectivity, and developed RESTful backend APIs using Node.js and Express.js for authentication and investment management.
                </>;
    const cyberDesc = "Completed a hands-on web development internship focused on building responsive interfaces and strengthening practical knowledge of modern frontend technologies. Gained real-world exposure to development workflows, version control, and collaborative team practices.";
              
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Where I've <strong className="purple">Worked </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              jobTitle="Angular & ASP.NET Core"
              company="Sevrin Ltd"
              duration="Nov 2024 – Present"
              badge="Full-Time"
              description={sevrinDesc}
              techStack={[
                // Angular
                "Angular",
                "TypeScript",
                "RxJS",
                "Angular Material",
                "Angular CLI",
                "Reactive Forms",
                "Lazy Loading",
                "Angular Routing",
                "Signals",
                "Component Architecture",
                "Change Detection",
                "Directives",
                "Pipes",
                "Guards",
                "Interceptors",
                "NgRx",
                // Web Development
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Responsive Design",
                "Bootstrap",
                "Tailwind CSS",
                "SCSS/SASS",

                // .NET Core
                ".NET Core",
                "ASP.NET Web API",
                "C#",
                "Entity Framework Core",
                "LINQ",
                "Dependency Injection",
                "Middleware",
                "JWT Authentication",
                "Identity Framework",
                "CQRS",
                "MediatR",
                "Repository Pattern",
                "Unit Of Work",
                "Clean Architecture",

                // SQL Database
                "SQL Server",
                "T-SQL",
                "Stored Procedures",
                "Database Design",
                "Indexing & Optimization",
                "SSMS",

                // API Integration
                "REST APIs",
                "Postman",
                "Swagger / OpenAPI",
                "HTTP Client",
                "JSON",
                "API Authentication",
                ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              jobTitle="Full Stack Developer"
              company="eSoftage"
              duration="May 2024 – Nov 2024"
              badge="Full-Time"
              description={esoftageDesc}
              techStack={[
                "React.js",
                "Solana",
                "Web3.js",
                "Metaplex SDK",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Angular",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              jobTitle="Web Development Intern"
              company="CyberTroopz"
              duration="Jun 2023 – Aug 2023"
              badge="Internship"
              description={cyberDesc}
              techStack={[
                "HTML",
                "CSS",
                "JavaScript",
                "Web Development",
                "Bootstrap",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;