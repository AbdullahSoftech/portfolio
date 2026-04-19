import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Card.Title style={{ fontSize: "1.5em", color: "#c770f0" }}>
           {props.company} – {props.jobTitle}
        </Card.Title>
        <Card.Subtitle className="my-4" style={{ fontSize: "0.8em" }}>
         {props.duration}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
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
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;