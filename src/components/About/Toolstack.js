import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiVisualstudio,
  SiSwagger,
  SiGithub,
  SiSlack,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import {
  FaRobot,
  FaSyncAlt,
  FaTasks,
} from "react-icons/fa";

const toolCategories = [
  {
    title: "AI & Productivity",
    tools: [
      { name: "Claude AI", icon: <FaRobot color="#D97757" /> },
      { name: "Cursor AI", icon: <FaRobot color="#60A5FA" /> },
      { name: "GitHub Copilot", icon: <SiGithub color="#ffffff" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    tools: [
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "VS Code", icon: <SiVisualstudiocode color="#007ACC" /> },
      { name: "Visual Studio", icon: <SiVisualstudio color="#5C2D91" /> },
      { name: "SSMS", icon: <SiMicrosoftsqlserver color="#CC2927" /> },
      { name: "Agile/Scrum", icon: <FaSyncAlt color="#34D399" /> },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
      { name: "Slack", icon: <SiSlack color="#4A154B" /> },
      { name: "ClickUp", icon: <FaTasks color="#7B68EE" /> },
    ],
  },
];

function Toolstack() {
  return (
    <>
      {toolCategories.map((category) => (
        <div key={category.title} style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "white", fontSize: "1.4em", marginBottom: "15px" }}>
            {category.title}
          </h3>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {category.tools.map((tool) => (
              <Col key={tool.name} xs={6} md={3} lg={2} className="tech-icons">
                <div style={{ fontSize: "2em", marginBottom: "6px" }}>
                  {tool.icon}
                </div>
                <div className="tech-icons-text" style={{ marginLeft: 10 }}>
                  {tool.name}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Toolstack;
