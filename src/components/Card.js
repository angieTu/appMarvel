import React from "react";

import Container from "./Container";
import Image from "./Image";
import ListItem from "./ListItem";
import Heading from "./Heading";

const Card = ({ type, src, title, description, series, comics, stories }) => {
  return (
    <Container as="article" className="card-container">
      <Container className="info-container">
        <Container className="img-container">
          <Image src={src} />
        </Container>
        <Container className="details-container">
          <Heading>{title}</Heading>
          <p>{description}</p>
        </Container>
      </Container>

      {type === "character" && (
        <Container className="aditional-info-container">
          {series && (
            <Container className="show-info-container">
              <h2>Series:</h2>
              {series.map((serie, index) => (
                <ListItem key={index}>{serie.name}</ListItem>
              ))}
            </Container>
          )}

          {comics && (
            <Container className="show-info-container">
              <h2>Comics:</h2>
              {comics.map((comic, index) => (
                <ListItem key={index}>{comic.name}</ListItem>
              ))}
            </Container>
          )}
          {stories && (
            <Container className="show-info-container">
              <h2>Stories:</h2>
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
