import "./story.css";

import { BoxLayout, Features } from "../../components";
import { Image } from "react-bootstrap";
import React from "react";
import { lisaProfilePic } from "../../assets";

const getDescriptions = () => {
  return (
    <div className="onsite__sections_ourStory_description">
      <p>
        At Onsite Contracting, our story is a testament to 25 years of
        unwavering commitment to excellence in the construction business. From
        our humble beginnings, we have evolved into a trusted name in the
        industry, renowned for our dedication to crafting exceptional homes and
        delivering top-notch renovation services. Our journey has been marked by
        a relentless pursuit of quality and a passion for transforming visions
        into reality. Over the years, we have honed our skills, mastered our
        craft, and built a legacy of trust with our clients. Our story is one of
        growth, innovation, and an enduring commitment to creating spaces that
        inspire and endure. With every project, we bring two and a half decades
        of expertise to the forefront, ensuring that the homes we build and the
        renovations we undertake stand as testaments to our unwavering pursuit
        of excellence. At Onsite Contracting, our story is your story—a story of
        enduring quality, craftsmanship, and a vision for the future.
      </p>
      <Image src={lisaProfilePic} roundedCircle />
    </div>
  );
};

const featuresList = [
  {
    title: "Eco Friendly Construction",
    description:
      "We prioritize eco-friendly construction practices to build sustainable homes for a greener tomorrow.",
  },
  {
    title: "The Newest Technology",
    description:
      "We leverage the newest technology to ensure precision, efficiency, and innovation in every aspect of our construction projects.",
  },
  {
    title: "Quality Construction Management",
    description:
      "Our commitment to quality construction management ensures every detail of your project is expertly handled, from inception to completion.",
  },
];

const OurStory = () => {
  return (
    <div>
      <BoxLayout
        leftContent={<Features features={featuresList} />}
        rightHeading="Our Story"
        rightContent={getDescriptions()}
        containerClassName="onsite__sections_ourStory"
      />
    </div>
  );
};

export default OurStory;
