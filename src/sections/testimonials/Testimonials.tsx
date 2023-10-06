import "./testimonials.css";

import Carousel from "react-multi-carousel";

import React from "react";
import { Card, Image } from "react-bootstrap";
import { yellowBar } from "../../assets";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const testimonials = [
  {
    testimonial:
      "I couldn't be happier with the exceptional work of Onsite Contracting. Mark and Lisa's team transformed our home beautifully. Their dedication to quality and Mark's meticulous attention to detail made all the difference. We are grateful for their expertise.",
    author: "John D",
  },
  {
    testimonial:
      "Onsite Contracting, led by Mark and Lisa, is a top-tier choice. Their professionalism shines through in every project. Lisa's design ideas are amazing, and Mark's craftsmanship is unparalleled. Our home renovation exceeded our expectations!",
    author: "Ethan ",
  },
  {
    testimonial:
      "Onsite Contracting is simply the best in the business. Mark and his team's dedication are remarkable. Their vision and skill transformed our outdated kitchen into a modern masterpiece. We couldn't be happier.",
    author: "Sophia R",
  },
  {
    testimonial:
      "Choosing Onsite Contracting was the best decision we made. Their expertise was evident from day one. Their meticulous planning and execution of our project were impressive. Our home now reflects their dedication to excellence.",
    author: "Liam Jackson",
  },
  {
    testimonial:
      "Onsite Contracting brought our vision to life with their exceptional work. Lisa's design flair and Mark's attention to detail made our renovation a success. Their communication and professionalism were outstanding.",
    author: "Noah Patel",
  },
];

const Testimonials = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>Testimonials</Card.Title>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {testimonials.map((testimonial, index) => (
            <Card bg="light">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <Card.Text style={{ color: "black", fontStyle: "italic" }}>
                    {testimonial.testimonial}
                  </Card.Text>
                  <footer className="blockquote-footer">
                    {testimonial.author}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default Testimonials;
