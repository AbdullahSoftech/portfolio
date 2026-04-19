import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiDotnet,
  SiCsharp,
  SiRabbitmq,
  SiMicrosoftsqlserver,
  SiRedis,
  SiMongodb,
} from "react-icons/si";
import {
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaLayerGroup,
  FaCodeBranch,
  FaMobileAlt,
  FaAtom,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular", icon: <SiAngular color="#DD0031" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "RxJS", icon: <FaAtom color="#B7178C" /> },
      { name: "Signals", icon: <SiAngular color="#DD0031" /> },
      { name: "Reactive Forms", icon: <SiAngular color="#DD0031" /> },
      { name: "Lazy Loading", icon: <SiAngular color="#DD0031" /> },
      { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
      { name: "State Management", icon: <SiRedux color="#764ABC" /> },
      { name: "Angular Material", icon: <SiAngular color="#3F51B5" /> },
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "SCSS", icon: <SiSass color="#CC6699" /> },
      { name: "Responsiveness", icon: <FaMobileAlt color="#38BDF8" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: ".NET Core", icon: <SiDotnet color="#512BD4" /> },
      { name: "ASP.NET Core Web API", icon: <SiDotnet color="#512BD4" /> },
      { name: "C#", icon: <SiCsharp color="#239120" /> },
      { name: "Entity Framework Core", icon: <SiDotnet color="#512BD4" /> },
      { name: "Clean Architecture", icon: <FaLayerGroup color="#A78BFA" /> },
      { name: "Layered Architecture", icon: <FaLayerGroup color="#A78BFA" /> },
      { name: "Repository Pattern", icon: <FaCodeBranch color="#60A5FA" /> },
      { name: "Unit of Work", icon: <FaCodeBranch color="#60A5FA" /> },
      { name: "Microservices", icon: <FaServer color="#F97316" /> },
      { name: "REST APIs", icon: <FaServer color="#34D399" /> },
      { name: "JWT Authentication", icon: <FaShieldAlt color="#FBBF24" /> },
      { name: "RBAC", icon: <FaShieldAlt color="#F87171" /> },
      { name: "MediatR", icon: <SiDotnet color="#512BD4" /> },
      { name: "AutoMapper", icon: <SiDotnet color="#512BD4" /> },
      { name: "Serilog", icon: <SiDotnet color="#512BD4" /> },
      { name: "FluentValidation", icon: <SiDotnet color="#512BD4" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: <SiMicrosoftsqlserver color="#CC2927" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      { name: "Stored Procedures", icon: <FaDatabase color="#60A5FA" /> },
      { name: "Query Optimization", icon: <FaDatabase color="#34D399" /> },
      { name: "Indexing", icon: <FaDatabase color="#FBBF24" /> },
      { name: "Schema Design", icon: <FaDatabase color="#A78BFA" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    title: "Message Queue",
    skills: [
      { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" /> },
    ],
  },
];

function Techstack() {
  return (
    <>
      {skillCategories.map((category) => (
        <div key={category.title} style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "white", fontSize: "1.4em", marginBottom: "15px" }}>
            {category.title}
          </h3>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {category.skills.map((skill) => (
              <Col key={skill.name} xs={6} md={3} lg={2} className="tech-icons">
                <div style={{ fontSize: "2em", marginBottom: "6px" }}>
                  {skill.icon}
                </div>
                <div className="tech-icons-text" style={{ marginLeft: 10 }}>
                  {skill.name}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Techstack;
