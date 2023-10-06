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

import { Container, Col, Row, Image, CardGroup, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
      "Our paint and exterior services transform homes, delivering a fresh, vibrant look that enhances curb appeal and protects against weather damage.",
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
          <Card.Title>Our Services</Card.Title>
          <img src={yellowBar} alt="yellow bar" />
        </div>
        {/* {getServices(servicesTop)}
        {getServices(servicesBottom)} */}
        {/* <Row xs={2} md={3} className="g-4"> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          showDots={true}
        >
          {[...servicesTop, ...servicesBottom].map((service, index) => (
            // <Col key={index} style={{ height: "12vh%", width: "30%" }}>
            <div style={{ padding: "0.5em" }}>
              <Card border="warning" bg="light">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={service.svg}
                    style={{ height: "6vh", width: "6vh" }}
                  />
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
          {/* </Row> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
