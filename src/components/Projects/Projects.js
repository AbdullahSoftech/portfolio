import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dialog from "../../Assets/Projects/dialog.jpeg";
import dialogAdmin from "../../Assets/Projects/dialog-admin.jpeg";
import butter from "../../Assets/Projects/butter.jpeg";
import dashboard from "../../Assets/Projects/dashboard.jpeg";
import codeEdit from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";

const projects = [
  {
    id: 1,
    title: "Dialog Platform",
    subtitle: "Stakeholder Engagement & Workflow Management",
    type: "SaaS Platform",
    status: "Live / In Progress",
    description:
      "A comprehensive SaaS-based stakeholder engagement and workflow management platform designed to unify analytics, communication, and project management tools for enterprise teams. Built with scalable Angular architecture, reactive forms, and optimized change detection strategies to deliver a high-performance user experience.",
    responsibilities: [
      "Developed scalable, reusable Angular components following best practices for maintainability and performance.",
      "Integrated REST APIs to enable seamless data flow and smooth user experience across the platform.",
      "Built high-performance, responsive web interfaces ensuring cross-browser compatibility and mobile responsiveness.",
      "Implemented lazy loading, change detection strategies, and code splitting to enhance application performance.",
      "Designed and developed RESTful services using ASP.NET Web API and C#, including controller logic and data validation.",
    ],
    techStack: [
      "Angular",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "REST APIs",
      "Angular Material",
      "Bootstrap",
    ],
    category: "Full Stack / SaaS",
    imgPath: dialog,
    ghLink: "",
    demoLink: "",
    isBlog: false,
  },
  {
    id: 5,
    title: "Dialog Admin Panel",
    subtitle: "Admin Control Center for Dialog SaaS Platform",
    type: "Admin Dashboard",
    status: "Live / In Progress",
    description:
      "A powerful and feature-rich admin panel built for the Dialog SaaS platform, enabling administrators to manage stakeholders, monitor workflows, configure platform settings, and oversee team activities. Built with Angular and Angular Material for a clean, enterprise-grade user experience.",
    responsibilities: [
      "Developed modular and reusable Angular components for admin-specific workflows and management screens.",
      "Integrated REST APIs for real-time data management including user roles, permissions, and platform configurations.",
      "Implemented role-based access control (RBAC) to restrict and manage admin-level features securely.",
      "Built responsive data tables, forms, and dashboards using Angular Material for a consistent UI.",
      "Collaborated with backend team to design and consume ASP.NET Core APIs for admin operations.",
    ],
    techStack: [
      "Angular",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "Angular Material",
      "REST APIs",
      "Bootstrap",
    ],
    category: "Full Stack / SaaS / Admin",
    imgPath: dialogAdmin,
    ghLink: "",
    demoLink: "",
    isBlog: false,
  },
  {
    id: 2,
    title: "ButterFactory DApp",
    subtitle: "Blockchain Investment Platform",
    type: "Decentralized Application",
    status: "Completed",
    description:
      "A decentralized application (DApp) built on the Solana blockchain enabling automated cryptocurrency investment with risk-based portfolio management. Features real-time on-chain data visualization, wallet integration, and smart contract interactions for low, medium, and high-risk investment plans.",
    responsibilities: [
      "Built an interactive React dashboard to visualize on-chain token data including prices, supply, and performance metrics.",
      "Implemented Solana wallet connection and smart contract interactions for automated investment plans.",
      "Developed RESTful backend APIs using Node.js and Express.js for authentication, investment management, and profit distribution.",
      "Worked with Solana Web3.js and Metaplex SDK to manage blockchain transactions and user investments.",
      "Designed and implemented end-to-end features from frontend UI to backend APIs and blockchain integration.",
    ],
    techStack: [
      "React.js",
      "Solana Web3.js",
      "Metaplex SDK",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Angular",
    ],
    category: "Full Stack / Blockchain / Web3",
    imgPath: butter,
    ghLink: "",
    demoLink: "",
    isBlog: false,
  },
  {
    id: 4,
    title: "ButterFactory Dashboard",
    subtitle: "Real-Time On-Chain Data Visualization",
    type: "Frontend Dashboard",
    status: "Completed",
    description:
      "An interactive and data-rich dashboard built with React.js for real-time visualization of on-chain token data on the Solana blockchain. Displays live token prices, supply metrics, investment performance, and portfolio analytics — giving investors a clear, actionable view of their decentralized investments.",
    responsibilities: [
      "Built interactive charts and data visualizations for real-time on-chain token prices, supply, and performance metrics.",
      "Integrated Solana Web3.js to fetch and display live blockchain data seamlessly.",
      "Designed responsive and intuitive UI components for investment tracking across low, medium, and high-risk plans.",
      "Connected dashboard with backend REST APIs for user-specific portfolio and profit data.",
      "Optimized rendering performance to handle frequent real-time data updates efficiently.",
    ],
    techStack: [
      "React.js",
      "Solana Web3.js",
      "JavaScript",
      "REST APIs",
      "CSS3",
      "Bootstrap",
    ],
    category: "Frontend / Blockchain / Web3",
    imgPath: dashboard,
    ghLink: "",
    demoLink: "",
    isBlog: false,
  },
  {
    id: 3,
    title: "Task Management System",
    subtitle: "RESTful Task Tracking & Management API",
    type: "Backend System",
    status: "Completed",
    description:
      "A comprehensive task management system with fully functional RESTful APIs built using ASP.NET Web API and C#. Supports task creation, assignment, tracking, and status management with secure authentication, authorization, and clean data access patterns using Entity Framework Core.",
    responsibilities: [
      "Developed RESTful APIs for task creation, assignment, tracking, and status management.",
      "Implemented authentication and authorization to secure API endpoints.",
      "Used Entity Framework Core for data access with full CRUD operations.",
      "Followed industry best practices and design patterns throughout the codebase.",
    ],
    techStack: [
      "ASP.NET Web API",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "JWT Authentication",
      ".NET Core",
    ],
    category: "Backend / API",
    imgPath: codeEdit,
    ghLink: "",
    demoLink: "",
    isBlog: false,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                subtitle={project.subtitle}
                type={project.type}
                status={project.status}
                description={project.description}
                responsibilities={project.responsibilities}
                techStack={project.techStack}
                category={project.category}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
