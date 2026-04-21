import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dialog from "../../Assets/Projects/dialog.jpeg";
import dialogAdmin from "../../Assets/Projects/dialog-admin.jpeg";
import butter from "../../Assets/Projects/butter.jpeg";
import dashboard from "../../Assets/Projects/dashboard.jpeg";
import codeEdit from "../../Assets/Projects/codeEditor.png";

const projects = [
  {
    id: 1,
    title: "Dialog Platform",
    subtitle: "Stakeholder Engagement & Workflow Management SaaS",
    type: "SaaS Platform",
    status: "Live / In Progress",
    description:
      "A scalable SaaS platform for stakeholder engagement and workflow management providing unified analytics, communication, and project management tools for enterprise teams. Built with modern Angular 17 architecture using Signals, RxJS, and reactive forms with performance-optimized change detection strategies to deliver a seamless high-performance user experience.",
    responsibilities: [
      "Developed dynamic, reusable Angular components using Angular 17, RxJS, reactive forms, and optimized change detection strategies for complex workflows.",
      "Implemented component architecture and routing with lazy loading and interceptors for efficient data handling and seamless frontend-backend communication.",
      "Built scalable RESTful APIs using ASP.NET Core 8 with clean architecture, CQRS pattern, repository pattern, and unit of work.",
      "Designed and optimized SQL Server queries and schemas for efficient data retrieval, including stored procedures and indexing strategies.",
      "Implemented JWT authentication, RBAC, and secure API endpoints for stakeholder management systems.",
      "Enhanced application performance through lazy loading, optimized change detection, and efficient API consumption reducing overhead.",
    ],
    techStack: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "Signals",
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "REST APIs",
      "Angular Material",
      "Bootstrap",
      "Tailwind CSS",
      "CQRS",
      "Clean Architecture",
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
    subtitle: "Enterprise Admin Dashboard for Dialog SaaS",
    type: "Admin Dashboard",
    status: "Live / In Progress",
    description:
      "A feature-rich admin control center for the Dialog SaaS platform enabling administrators to manage stakeholders, monitor workflows, configure platform settings, and oversee team activities. Built with Angular 17 and Angular Material providing an enterprise-grade, responsive user experience with real-time data management capabilities.",
    responsibilities: [
      "Developed modular, reusable Angular 17 components with RxJS for admin-specific workflows, data management screens, and configuration interfaces.",
      "Integrated RESTful APIs for real-time data management including user roles, permissions, stakeholder management, and platform configurations.",
      "Implemented comprehensive role-based access control (RBAC) with JWT authentication to restrict and manage admin-level features securely.",
      "Built responsive data tables, complex forms, filtering, and admin dashboards using Angular Material for a consistent enterprise-grade UI.",
      "Optimized change detection and implemented lazy loading for admin routes to handle large datasets and improve dashboard responsiveness.",
      "Collaborated with backend team to design and consume ASP.NET Core APIs, ensuring proper API structure and efficient data handling.",
    ],
    techStack: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "Reactive Forms",
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Angular Material",
      "REST APIs",
      "Bootstrap",
      "JWT Authentication",
      "RBAC",
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
    subtitle: "Solana-Based Decentralized Investment Platform",
    type: "Decentralized Application",
    status: "Completed",
    description:
      "A decentralized application (DApp) built on Solana blockchain enabling automated cryptocurrency investment with risk-based portfolio management. Features real-time on-chain data visualization, wallet integration, and smart contract interactions supporting low, medium, and high-risk investment plans with automated profit distribution.",
    responsibilities: [
      "Built interactive React dashboard to visualize live on-chain token data including prices, supply, market performance, and investment metrics.",
      "Implemented Solana wallet connection using Web3.js and Metaplex SDK for secure user authentication and smart contract interactions.",
      "Developed RESTful backend APIs using Node.js and Express.js for user authentication, investment plan management, and automated profit distribution.",
      "Integrated Solana blockchain transactions for automated investment execution and real-time blockchain data fetching.",
      "Designed and implemented end-to-end features from frontend UI components to backend APIs and blockchain integration.",
      "Built responsive and intuitive interfaces for investment tracking across different risk-based portfolio options.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Solana",
      "Web3.js",
      "Metaplex SDK",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Wallet Integration",
      "Smart Contracts",
      "Bootstrap",
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
