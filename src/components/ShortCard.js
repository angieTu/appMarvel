import React from "react";

import { useHistory } from "react-router-dom";

import Container from "./Container";
import Image from "./Image";
import Heading from "./Heading";

const ShortCard = ({ src, title, type, id }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/${type}/${id}`);
  };
  return (
    <Container
      as="article"
      className="shortCard-container"
      onClick={() => handleClick(id)}
    >
      <Container className="shortCard-img">
        <Image src={src}></Image>
      </Container>
      <Heading>{title}</Heading>
    </Container>
  );
};

export default ShortCard;
