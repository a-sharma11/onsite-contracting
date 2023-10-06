import { Image, Row, Col, Button, Card } from "react-bootstrap";
import "./header.css";

import { yellowBar, sampleImg2 } from "../../assets";

const Header = () => {
  return (
    <Card id="onsite_header_card">
      <Card.Img src={sampleImg2} style={{ height: "100%" }} />
      <Card.ImgOverlay id="onsite_header_card_overlay">
        <Image
          id="onsite_header_card_overlay_ybar"
          src={yellowBar}
          alt="yellow bar"
        />
        <Card.Title id="onsite_header_card_title">
          Onsite Contracting
        </Card.Title>
        <Card.Text id="onsite_header_card_text">
          Transforming Southern New Hampshire one home at a time, Onsite
          Contracting is your trusted partner for new home construction and
          revitalizing existing residences. Building dreams and enhancing homes,
          we bring craftsmanship and innovation to every project.
        </Card.Text>
      </Card.ImgOverlay>
      {/* <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body> */}
    </Card>
    // <div>
    //   <div className="onsite__header-container">
    //     <Row>
    //       <Col>
    //         <div
    //           className="onsite__header-container_background"
    //           style={{ backgroundImage: `url(${sampleImg2})` }}
    //         >
    //           <div className="onsite__header-container_background_content">
    //             <Image src={yellowBar} alt="yellow bar" />
    //             <h1>Onsite Contracting</h1>
    //             <p>
    //               Transforming Southern New Hampshire one home at a time, Onsite
    //               Contracting is your trusted partner for new home construction
    //               and revitalizing existing residences. Building dreams and
    //               enhancing homes, we bring craftsmanship and innovation to
    //               every project.
    //             </p>
    //             <Button
    //               className="onsite__header-container_background_content_button"
    //               variant="warning"
    //               size="lg"
    //             >
    //               View our work
    //             </Button>{" "}
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  );
};

export default Header;
