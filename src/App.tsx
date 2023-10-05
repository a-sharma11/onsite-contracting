import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

import { P3, bkgImg, designSvg } from "./assets";

import { NavBar } from "./sections";
import { Figure, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Construction from "./assets/construction.svg";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Container className="onsite_App_main">
        <Row className="onsite_App_NavBar">
          <NavBar />
        </Row>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
