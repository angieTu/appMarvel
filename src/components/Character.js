import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "./Card";
import Button from "./Button";
import Container from "./Container";

import ScrollToTop from "./ScrollToTop";
import { DotLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  & div {
    background-color: red;
  }
`;

const Character = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const history = useHistory();
  const { characterID } = useParams();

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getCharacter = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${characterID}?apikey=${API_KEY}`
      );
      const data = await response.json();
      setCharacter(data.data.results[0]);
      setIsLoading(false);
    };
    getCharacter();
  }, [characterID]);

  const handleClick = () => {
    history.goBack(-1);
  };

  return (
    <>
      {isLoading && (
        <Container className="loader">
          <DotLoader
            type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
            css={override}
          />
        </Container>
      )}
      {!isLoading && character && (
        <Container className="character-container">
          <ScrollToTop />
          <Button className="go-back-button" onClick={handleClick}>
            Back to Characters
          </Button>
          {character && (
            <Card
              type="character"
              src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              title={character.name}
              description={character.description}
              series={character.series?.items}
              comics={character.comics?.items}
              stories={character.stories?.items}
            ></Card>
          )}
        </Container>
      )}
    </>
  );
};

export default Character;
