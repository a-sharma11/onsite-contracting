import React from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { Header, Services } from "../../sections";
import "./home.css";
import { OurStory, OurWork, Tags, Testimonials, Footer } from "../../sections";

const Home = () => {
  return (
    <div className="onsite_App_home">
      <Header />
      <Services />
      <OurStory />
      <Tags />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
