import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "./Card";
import Button from "./Button";
import Container from "./Container";

const Character = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const history = useHistory();
  const { characterID } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${characterID}?apikey=${API_KEY}`
      );
      const data = await response.json();
      setCharacter(data.data.results[0]);
    };
    getCharacter();
  }, [characterID]);

  const handleClick = () => {
    history.goBack(-1);
  };

  return (
    <Container className="character-container">
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

      <Button className="go-back-button" onClick={handleClick}>
        Back to Characters
      </Button>
    </Container>
  );
};

export default Character;
