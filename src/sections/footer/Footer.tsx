import { Card, CardBody, CardGroup, Carousel, Image } from "react-bootstrap";
import "./footer.css";
import React from "react";
import { onSiteLogoWhite } from "../../assets";
import * as Icon from "react-bootstrap-icons";

const contactMethods = [
  {
    icon: Icon.GeoAltFill,
    text: "149 Pheasant Runn Goshen NH 03752",
  },
  {
    icon: Icon.TelephoneOutboundFill,
    text: "603.660.0866",
  },
  {
    icon: Icon.EnvelopeAtFill,
    text: "markatonsite@gmail.com",
  },
];

const testimonials = [
  "Onsite Contracting's commitment to excellence is truly commendable. From the initial planning stages to the final touches, their team demonstrated exceptional project management skills and attention to detail. They transformed our vision into reality, and we couldn't be happier with the outcome. If you're looking for a reliable partner for your construction needs, Onsite Contracting is the way to go.",
  "Mark and his team did a great job on our new home. They were professional, courteous, and timely. We would highly recommend them to anyone looking to build a new home. - John Doe",
  "I can't say enough about the professionalism and competence of Onsite Contracting. We engaged them for a complex renovation project, and they delivered outstanding results. Their communication throughout the project was clear and consistent, and they were always responsive to our needs. The Onsite team's expertise and dedication made the entire process smooth and stress-free.",
  "As a property developer, I've had the pleasure of collaborating with Onsite Contracting on multiple occasions. Their skilled workforce, attention to detail, and commitment to delivering projects on time have been invaluable. They consistently go above and beyond to ensure the highest quality work, and their competitive pricing makes them a top choice in the industry.",
  "Onsite Contracting is the epitome of professionalism in the construction industry. We hired them for a major commercial construction project, and they demonstrated exceptional project management skills and a deep understanding of our needs. Their ability to adapt to changing circumstances and their unwavering dedication to meeting deadlines were impressive. I highly recommend Onsite Contracting for any construction project, big or small.",
];

// const Footer = () => {
//   return (
//     <div className="onsite__sections_footer">
//       <div className="onsite_App_footer_contact">
//         <Image src={onSiteLogoWhite} />
//         <h4 style={{ paddingTop: "1rem" }}>Contact Us</h4>
//         {contactMethods.map((method, index) => (
//           <div className="onsite_App_footer_contact_address" key={index}>
//             {<method.icon color="#FFB400" size="1.5vw" />}
//             <p>{method.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="onsite_App_footer_reviews">
//         <div className="onsite_App_footer_reviews_div">
//           <h4>Testimonials</h4>
//           <Carousel indicators={false}>
//             {testimonials.map((testimonial, index) => (
//               <Carousel.Item key={index}>
//                 <p>{testimonial}</p>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <Card bg="dark">
      <div style={{ display: "flex" }}>
        <div style={{}}>
          <Image src={onSiteLogoWhite} style={{ height: "3rem" }} />
          <Card.Text
            style={{ color: "white", textAlign: "center" }}
          ></Card.Text>
        </div>
        <div>
          {contactMethods.map((method, index) => (
            <div style={{ display: "flex" }}>
              {<method.icon color="#FFB400" size="1.5rem" />}
              <Card.Text style={{ color: "white", textAlign: "center" }}>
                {method.text}
              </Card.Text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Footer;
