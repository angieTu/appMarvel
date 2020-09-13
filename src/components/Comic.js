import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

const Comic = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const [comic, setComic] = useState({});

  const history = useHistory();
  const { comicID } = useParams();

  useEffect(() => {
    const getComic = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${comicID}?apikey=${API_KEY}`
      );
      const data = await response.json();
      setComic(data.data.results[0]);
    };
    getComic();
  }, [comicID]);

  const handleClick = () => {
    history.goBack(-1);
  };

  return (
    <Container className="comic-container">
      {comic && (
        <Card
          src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
          title={comic.title}
          description={comic.description}
        ></Card>
      )}
      <Button className="go-back-button" onClick={handleClick}>
        Back to Comics
      </Button>
    </Container>
  );
};

export default Comic;
