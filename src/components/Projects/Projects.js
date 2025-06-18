import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/E-Commerce.png";

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
              imgPath={Ecommerce}
              isBlog={false}
              title="ShopIt"
              description="A modern E-Commerce platform built with React.js, Axios, Bootstrap, and typewriter-effect, featuring real-time product browsing, search and sorting functionality, and a seamless add-to-cart experience for users."
              ghLink="https://github.com/RahulAid/ShopIt-Ecommerce"
              demoLink="https://rahulaid.github.io/ShopIt-Ecommerce/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
