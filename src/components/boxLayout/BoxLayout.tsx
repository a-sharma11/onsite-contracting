import { Container, Image } from "react-bootstrap";
import "./boxLayout.css";

import React from "react";
import { lisaProfilePic, yellowBar } from "../../assets";

interface BoxLayotProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  rightHeading: string;
  containerClassName: string;
}

const BoxLayout = (boxLayoutProps: BoxLayotProps) => {
  return (
    <Container className={boxLayoutProps.containerClassName}>
      <div className="onsite__component_box_layout_left">
        {boxLayoutProps.leftContent}
      </div>
      <div className="onsite__component_box_layout_right">
        <div className="onsite__component_box_layout_right_top">
          <div className="onsite__component_box_layout_right_top_heading">
            <h1>{boxLayoutProps.rightHeading}</h1>
            <img src={yellowBar} />
          </div>
          <div className="onsite__component_box_layout_right_top_content">
            {boxLayoutProps.rightContent}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BoxLayout;
