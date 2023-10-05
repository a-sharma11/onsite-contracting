import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavBar } from "./sections";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <div className="onsite_App_main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
