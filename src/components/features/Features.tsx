import "./features.css";
import { arrowRight } from "../../assets";
import { Card, Image } from "react-bootstrap";
import { left } from "@popperjs/core";

interface FeaturesProps {
  features: {
    title: string;
    description: string;
  }[];
}

// const Features = ({ features }: FeaturesProps) => {
//   return (
//     <div className="onsite__component_features">
//       {features.map((feature, index) => (
//         <div className="onsite__component_features_list" key={"list-" + index}>
//           <div
//             className="onsite__component_features_list_heading"
//             key={"list_heading" + index}
//           >
//             <img src={arrowRight} key={index} />
//             <h3>{feature.title}</h3>
//           </div>
//           <p>{feature.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

//export default Features;

const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="onsite__component_features">
      {features.map((feature, index) => (
        <div
          className="onsite__component_features_list_heading"
          key={"list_heading" + index}
        >
          <Image src={arrowRight} key={index} />
          <div style={{ paddingLeft: "0.5em", textAlign: "left" }}>
            <Card.Title>{feature.title}</Card.Title>
            <Card.Text style={{ color: "black" }}>
              {feature.description}
            </Card.Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
