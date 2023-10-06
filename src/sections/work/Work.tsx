import "./work.css";

import { BoxLayout, Features } from "../../components";
import { Card, CardGroup, Carousel, Image } from "react-bootstrap";
import { P1, P3, P4, P5, P6, yellowBar } from "../../assets";

const OnsiteCarousel = () => {
  return (
    <Carousel className="onsite__section_work_carousel" slide controls>
      {[P1, P3, P4, P5, P6].map((image, index) => (
        <Carousel.Item key={index}>
          <Image src={image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const processList = [
  {
    title: "Site Inspection",
    description: "",
  },
  {
    title: "Home Design",
    description: "",
  },
  {
    title: "Escavation",
    description: "",
  },
  {
    title: "Foundation",
    description: "",
  },
  {
    title: "Framing",
    description: "",
  },
  {
    title: "Exterior Finishes & Mechanical Installation",
    description: "",
  },
  {
    title: "Insulation and Interior Dry Wall",
    description: "",
  },
  {
    title: "Flooring and Fixtures",
    description: "",
  },
  {
    title: "Landscaping and Final Touches",
    description: "",
  },
  {
    title: "Move In!",
    description: "",
  },
];

const getProcess = () => {
  return (
    <div className="onsite__section_process">
      <div className="onsite__section_process_heading">
        <Card.Header style={{ fontSize: "1.5em" }}>
          Construction Steps
        </Card.Header>
      </div>
      <Features features={processList} />
    </div>
  );
};

// const Work = () => {
//   return (
//     <div>
//       <BoxLayout
//         leftContent={getProcess()}
//         rightHeading="Our Work"
//         rightContent={OnsiteCarousel()}
//         containerClassName="onsite__sections_ourWork"
//       />
//     </div>
//   );
// };

// export default Work;

const Work = () => {
  return (
    <CardGroup>
      <Card bg="light" style={{ flex: 2 }}>
        <Card.Body>
          <Card.Title>Our Work</Card.Title>
          <Image src={yellowBar} style={{ height: "1vh" }} />
          {OnsiteCarousel()}
        </Card.Body>
      </Card>
      <Card style={{ background: "#FFB400", flex: 1 }}>
        <Card.Body>{getProcess()}</Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Work;
