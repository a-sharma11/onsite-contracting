import React from "react";
import { Card, Container } from "react-bootstrap";
import { projectsPageHeaderImg } from "../../assets";
import "./tags.css";
// const Tags = () => {
//   return (
//     <div
//       className="onsite__sections_tags_item"
//       style={{ backgroundImage: `url(${projectsPageHeaderImg})` }}
//     >
//       <div className="onsite__sections_tags_item_text">
//         <h2>OUR GOAL THEN AND NOW IS TO PROVIDE QUALITY ON TIME PROJECTS</h2>
//       </div>
//     </div>
//   );
// };

// export default Tags;

const Tags = () => {
  return (
    <Card>
      <Card.Img src={projectsPageHeaderImg} />
      <Card.ImgOverlay style={{ background: "rgba(0, 0, 0, 0.3)" }}>
        <Card.Title
          style={{
            color: "white",
            fontSize: "3vmax",
            textAlign: "center",
            paddingTop: "10%",
          }}
        >
          OUR GOAL THEN AND NOW IS TO PROVIDE QUALITY ON TIME PROJECTS
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Tags;
