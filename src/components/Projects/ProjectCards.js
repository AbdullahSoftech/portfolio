import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title style={{ color: "#c770f0" }}>{props.title}</Card.Title>
        {props.subtitle && (
          <Card.Subtitle className="mb-2 text-muted">
            {props.subtitle}
          </Card.Subtitle>
        )}
        {props.type && (
          <p style={{ fontSize: "0.9em", color: "#be6adf" }}>
            <strong>Type:</strong> {props.type}
          </p>
        )}
        {props.status && (
          <p style={{ fontSize: "0.9em", color: "#be6adf" }}>
            <strong>Status:</strong> {props.status}
          </p>
        )}
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
          {props.description}
        </Card.Text>
        {props.responsibilities && props.responsibilities.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <strong style={{ color: "#c770f0" }}>Key Responsibilities:</strong>
            <ul style={{ color: "white", paddingLeft: "20px" }}>
              {props.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
        {props.techStack && props.techStack.length > 0 && (
          <div style={{ marginTop: "15px" }}>
            <strong style={{ color: "#c770f0" }}>Tech Stack:</strong>
            <div style={{ marginTop: "5px" }}>
              {props.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  style={{
                    marginRight: "8px",
                    marginBottom: "5px",
                    backgroundColor: "#6c757d",
                    color: "white",
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {props.category && (
          <p style={{ fontSize: "0.9em", color: "#be6adf", marginTop: "10px" }}>
            <strong>Category:</strong> {props.category}
          </p>
        )}
        <div style={{ marginTop: "20px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
