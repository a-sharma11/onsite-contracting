import "./features.css";
import { arrowRight } from "../../assets";

interface FeaturesProps {
  features: {
    title: string;
    description: string;
  }[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="onsite__component_features">
      {features.map((feature) => (
        <div className="onsite__component_features_list">
          <div className="onsite__component_features_list_heading">
            <img src={arrowRight} />
            <h3>{feature.title}</h3>
          </div>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
