import React from "react";

import Container from "./Container";
import Image from "./Image";
import ListItem from "./ListItem";
import Heading from "./Heading";
import Text from "./Text";

const Card = ({ type, src, title, description, series, comics, stories }) => {
  return (
    <Container as="article" className="card-container">
      <Container className="info-container">
        <Container className="img-container">
          <Image src={src} />
        </Container>
        <Container className="details-container">
          <Heading>{title}</Heading>
          <Text>{description ? description : "No description was found"}</Text>
        </Container>
      </Container>

      {type === "character" && (
        <Container className="aditional-info-container">
          {series && (
            <Container className="show-info-container">
              <Heading as="h2">Series:</Heading>
              {series.map((serie, index) => (
                <ListItem key={index}>{serie.name}</ListItem>
              ))}
            </Container>
          )}

          {comics && (
            <Container className="show-info-container">
              <Heading as="h2">Comics:</Heading>
              {comics.map((comic, index) => (
                <ListItem key={index}>{comic.name}</ListItem>
              ))}
            </Container>
          )}
          {stories && (
            <Container className="show-info-container">
              <Heading as="h2">Stories:</Heading>
              {stories.map((story, index) => (
                <ListItem key={index}>{story.name}</ListItem>
              ))}
            </Container>
          )}
        </Container>
      )}
    </Container>
  );
};

export default Card;
