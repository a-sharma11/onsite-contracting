import "./services.css";
import {
  designSvg,
  buildingRepairSvg,
  demoSvg,
  foundationSvg,
  paintSvg,
  constructionSvg,
  yellowBar,
} from "../../assets";

import { Container, Col, Row, Image } from "react-bootstrap";

const servicesTop = [
  {
    svg: designSvg,
    title: "Design",
    description:
      "Our design and layout expertise is the blueprint for turning your dreams into meticulously crafted, functional spaces that inspire and delight.",
  },
  {
    svg: constructionSvg,
    title: "New Home Construction",
    description:
      "Our expertise transforms blueprints into reality, creating bespoke residences that embody quality, innovation, and your unique vision.",
  },
  {
    svg: buildingRepairSvg,
    title: "Building Repairs",
    description:
      "Our team of experts is dedicated to transforming your existing space into a revitalized sanctuary that you'll love for years to come.",
  },
];
const servicesBottom = [
  {
    svg: foundationSvg,
    title: "Foundation",
    description:
      "A strong foundation is the cornerstone of every project we undertake, ensuring the stability and durability of your construction or renovation.",
  },
  {
    svg: paintSvg,
    title: "Paint & Exterior",
    description:
      "From curb appeal to awe-inspiring appeal, we paint your exterior dreams into vibrant reality.",
  },
  {
    svg: demoSvg,
    title: "Demolition",
    description:
      "Our demolition services are executed with precision and safety, clearing the way for new beginnings while respecting environmental regulations.",
  },
];

const getServices = (serviceList: any[], key: string) => {
  return (
    <Row className="onsite__services-container_service_list" key={key}>
      {serviceList.map((svg) => (
        <Col className="onsite__services-container_service_list_col">
          <div className="onsite__services-container_service_list_icon">
            <Image src={svg.svg} alt={svg.title} />
          </div>
          <div className="onsite__services-container_service_list_txt">
            <h3>{svg.title}</h3>
            <p>{svg.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const Services = () => {
  return (
    <Container>
      <div className="onsite__services-container">
        <div className="onsite__services-container_heading">
          <h2>Our Services</h2>
          <img src={yellowBar} alt="yellow bar" />
        </div>
        {getServices(servicesTop, "servicesTop")}
        {getServices(servicesBottom, "servicesBottom")}
      </div>
    </Container>
  );
};

export default Services;
