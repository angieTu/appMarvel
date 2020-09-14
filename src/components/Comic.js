import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

import ScrollToTop from "./ScrollToTop";
import { DotLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  & div {
    background-color: red;
  }
`;

const Comic = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const [comic, setComic] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const { comicID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getComic = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${comicID}?apikey=${API_KEY}`
      );
      const data = await response.json();
      setComic(data.data.results[0]);
      setIsLoading(false);
    };
    getComic();
  }, [comicID]);

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
      {!isLoading && comic && (
        <Container className="comic-container">
          <ScrollToTop />
          <Button className="go-back-button" onClick={handleClick}>
            Back to Comics
          </Button>
          {comic && (
            <Card
              src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
              title={comic.title}
              description={comic.description}
            ></Card>
          )}
        </Container>
      )}
    </>
  );
};

export default Comic;
