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

const getServices = (serviceList: any[]) => {
  return (
    <Row className="onsite__services-container_service_list">
      {serviceList.map((svg, index) => (
        <Col
          className="onsite__services-container_service_list_col"
          key={"list_col-" + index}
        >
          <div
            className="onsite__services-container_service_list_icon"
            key={"list_icon-" + index}
          >
            <Image src={svg.svg} alt={svg.title} key={index} />
          </div>
          <div
            className="onsite__services-container_service_list_txt"
            key={"list_txt-" + index}
          >
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
    <div>
      <div className="onsite__services-container">
        <div className="onsite__services-container_heading">
          <h2>Our Services</h2>
          <img src={yellowBar} alt="yellow bar" />
        </div>
        {getServices(servicesTop)}
        {getServices(servicesBottom)}
      </div>
    </div>
  );
};

export default Services;
