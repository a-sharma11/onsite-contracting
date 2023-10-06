import "./navbar.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { onSiteLogoBlack, onSiteLogoWhite } from "../../assets";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

// const Navbar = () => {
//   return (
//     <div className="onsite__navbar">
//       <div>
//         <Link className="onsite__navbar_left" to="/">
//           <Image src={onSiteLogoWhite} fluid />
//         </Link>
//       </div>
//       <div className="onsite__navbar-pages">
//         <div className="onsite__navbar_pages_hours">
//           <Icon.ClockFill color="#FFB400" size="1.5vw"></Icon.ClockFill>
//           <p>MONDAY-FRIDAY 08:00 - 20:00</p>
//         </div>
//         <div className="onsite__navbar_pages_phone">
//           <Icon.TelephoneOutboundFill
//             color="#FFB400"
//             size="1.5vw"
//           ></Icon.TelephoneOutboundFill>
//           <p>603.660.0866</p>
//         </div>
//         <div className="onsite__navbar_pages_email">
//           <Icon.EnvelopeAtFill
//             color="#FFB400"
//             size="1.5vw"
//           ></Icon.EnvelopeAtFill>
//           <a href="mailto: markatonsite@gmail.com">markatonsite@gmail.com</a>
//         </div>
//       </div>
//     </div>
//   );
// };

const Navbar2 = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand href="#home" id="navbar_brand_icon">
        <Image src={onSiteLogoWhite} width="100" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto" id="onsite__navbar_collapse">
          <div id="onsite__navbar_pages_hours">
            <Icon.ClockFill
              color="#FFB400"
              width="30"
              height="30"
            ></Icon.ClockFill>
            <Navbar.Text>MONDAY-FRIDAY 08:00 - 20:00</Navbar.Text>
          </div>
          <div id="onsite__navbar_pages_phone">
            <Icon.TelephoneOutboundFill
              color="#FFB400"
              width="30"
              height="30"
            ></Icon.TelephoneOutboundFill>
            <Navbar.Text>603.660.0866</Navbar.Text>
          </div>
          <div id="onsite__navbar_pages_email">
            <Icon.EnvelopeAtFill
              color="#FFB400"
              width="30"
              height="30"
            ></Icon.EnvelopeAtFill>
            <Navbar.Text>markatonsite@gmail.com</Navbar.Text>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbar2;
