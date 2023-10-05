import React from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { Header, Services } from "../../sections";
import "./home.css";
import { OurStory, OurWork, Tags, Footer } from "../../sections";

const Home = () => {
  return (
    <Container className="onsite_App_home">
      <Header />
      <Services />
      <OurStory />
      <Tags />
      <OurWork />
      <Footer />
    </Container>
  );
};

export default Home;
