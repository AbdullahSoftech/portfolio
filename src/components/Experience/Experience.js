import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
    const sevrinDesc = <>
                  Building and optimizing <span className="purple">Dialog & Dialog Admin</span>, a SaaS-based Stakeholder Engagement and Workflow Management Platform. Developed scalable Angular components using Signals, RxJS, and reactive forms with optimized change detection. Designed and maintained RESTful APIs using ASP.NET Core 8, implementing clean architecture, CQRS, repository patterns, and JWT authentication. Optimized SQL Server queries, implemented database indexing, and ensured seamless frontend-backend integration for complex workflows.
                </>;
    const esoftageDesc = <>
                  Developed <span className="purple">ButterFactory DApp</span>, a decentralized investment application on Solana blockchain featuring automated risk-based portfolio management. Built interactive <span className="purple">Dashboard</span> using React for real-time on-chain token data visualization. Integrated Solana wallet connectivity and Web3.js for smart contract interactions. Developed RESTful backend APIs with Node.js and Express.js for authentication, investment management, and profit distribution.
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
              company="Sevrin Limited"
              duration="Dec 2024 – Present"
              badge="Full-Time"
              description={sevrinDesc}
              techStack={[
                // Angular
                "Angular 17",
                "TypeScript",
                "RxJS",
                "Angular Material",
                "Reactive Forms",
                "Lazy Loading",
                "Angular Routing",
                "Signals",
                "Component Architecture",
                "Change Detection",
                "Interceptors",
                // Web Development
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Responsive Design",
                "Bootstrap",
                "Tailwind CSS",
                "SCSS/SASS",

                // .NET Core
                ".NET 8",
                "ASP.NET Core Web API",
                "C#",
                "Entity Framework Core",
                "LINQ",
                "Dependency Injection",
                "JWT Authentication",
                "CQRS",
                "MediatR",
                "Repository Pattern",
                "Unit Of Work",
                "Clean Architecture",
                "Layered Architecture",

                // SQL Database
                "SQL Server",
                "T-SQL",
                "Stored Procedures",
                "Database Design",
                "Query Optimization",
                "Indexing",
                "SSMS",

                // API Integration
                "REST APIs",
                "Postman",
                "Swagger / OpenAPI",
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
                "Angular",
                "TypeScript",
                "JavaScript (ES6+)",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "Solana Blockchain",
                "Web3.js",
                "Metaplex SDK",
                "Wallet Integration",
                "Smart Contracts",
                "HTML5",
                "CSS3",
                "Bootstrap",
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