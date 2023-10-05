import "./navbar.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { onSiteLogoBlack, onSiteLogoWhite } from "../../assets";
import { Container, Image } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="onsite__navbar">
      <div>
        <Link className="onsite__navbar_left" to="/">
          <Image src={onSiteLogoWhite} />
        </Link>
      </div>
      <div className="onsite__navbar-pages">
        <div className="onsite__navbar_pages_hours">
          <Icon.ClockFill color="#FFB400" size="1.5vw"></Icon.ClockFill>
          <p>MONDAY-FRIDAY 08:00 - 20:00</p>
        </div>
        <div className="onsite__navbar_pages_phone">
          <Icon.TelephoneOutboundFill
            color="#FFB400"
            size="1.5vw"
          ></Icon.TelephoneOutboundFill>
          <p>603.660.0866</p>
        </div>
        <div className="onsite__navbar_pages_email">
          <Icon.EnvelopeAtFill
            color="#FFB400"
            size="1.5vw"
          ></Icon.EnvelopeAtFill>
          <a href="mailto: markatonsite@gmail.com">markatonsite@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
