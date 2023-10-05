import React from "react";
import { Container } from "react-bootstrap";
import { projectsPageHeaderImg } from "../../assets";
import "./tags.css";
const Tags = () => {
  return (
    <Container>
      <div
        className="onsite__sections_tags_item"
        style={{ backgroundImage: `url(${projectsPageHeaderImg})` }}
      >
        <div className="onsite__sections_tags_item_text">
          <h2>OUR GOAL THEN AND NOW IS TO PROVIDE QUALITY ON TIME PROJECTS</h2>
        </div>
      </div>
    </Container>
  );
};

export default Tags;
