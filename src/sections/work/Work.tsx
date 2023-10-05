import "./work.css";

import { BoxLayout, Features } from "../../components";
import { Carousel, Image } from "react-bootstrap";
import { P1, P3, P4, P5, P6 } from "../../assets";

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
        <h1>Construction Steps</h1>
      </div>
      <Features features={processList} />
    </div>
  );
};

const Work = () => {
  return (
    <div>
      <BoxLayout
        leftContent={getProcess()}
        rightHeading="Our Work"
        rightContent={OnsiteCarousel()}
        containerClassName="onsite__sections_ourWork"
      />
    </div>
  );
};

export default Work;
