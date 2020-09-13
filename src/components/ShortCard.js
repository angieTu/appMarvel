import React from "react";

import Container from "./Container";
import Image from "./Image";
import Heading from "./Heading";

const ShortCard = ({ src, title }) => {
  return (
    <Container as="article" className="shortCard-container">
      <Container className="shortCard-img">
        <Image src={src}></Image>
      </Container>
      <Heading>{title}</Heading>
    </Container>
  );
};

export default ShortCard;
