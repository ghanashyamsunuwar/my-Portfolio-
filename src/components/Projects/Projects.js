import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hms from "../../Assets/Projects/hms.jpg";
import crud from "../../Assets/Projects/crud.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hospital Management"
              description="A hospital management website allows users to book appointments for checkups and other services, providing a convenient platform to manage healthcare needs efficiently."
              ghLink=""
              demoLink="https://hospitalcare.managepatient.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD IN REACT"
              description="It’s a website where user can add data with the help of form. Inform use can add user detail with user image. Added data areshown in table."
              ghLink="https://github.com/ghanashyamsunuwar/react-crud"
              demoLink="https://reactcrudbyghanashyam.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
