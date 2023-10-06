import { Image, Row, Col, Button } from "react-bootstrap";
import "./header.css";

import { yellowBar, sampleImg2 } from "../../assets";

const Header = () => {
  return (
    <div>
      <div className="onsite__header-container">
        <Row>
          <Col>
            <div
              className="onsite__header-container_background"
              style={{ backgroundImage: `url(${sampleImg2})` }}
            >
              <div className="onsite__header-container_background_content">
                <Image src={yellowBar} alt="yellow bar" />
                <h1>Onsite Contracting</h1>
                <p>
                  Transforming Southern New Hampshire one home at a time, Onsite
                  Contracting is your trusted partner for new home construction
                  and revitalizing existing residences. Building dreams and
                  enhancing homes, we bring craftsmanship and innovation to
                  every project.
                </p>
                <Button
                  className="onsite__header-container_background_content_button"
                  variant="warning"
                  size="lg"
                >
                  View our work
                </Button>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
