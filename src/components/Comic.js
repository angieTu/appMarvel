import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 119px;
  flex-direction: column;
  font: 400 14px/1.2 "Roboto Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
  color: #202020;
`;

const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #757272;
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  box-shadow: 0px 0px 39px -6px black;
  background-color: #151515;
  color: #fff;

  & > h1 {
    font-size: 18px;
  }
`;
const CardImg = styled.div`
  overflow: hidden;
  height: 500px;
  width: 700px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  transition: 0.2s;
  object-fit: cover;

  &:hover {
    transform: scale(1.2);
  }
`;

const ContainerDetails = styled.div`
  text-transform: uppercase;
  width: 40%;
  padding: 10px 57px;
`;

const Button = styled.button`
  width: 20%;
  display: inline-block;
  margin: 10px auto;
  font: 400 14px/1.2 "Roboto Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
  background-color: #e62429;
  height: 36px;
  border-radius: 38px 0px;

  &:hover {
    background-color: #9f0013;
  }
`;

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
    <Container>
      {comic && (
        <>
          <Card>
            <CardImg>
              <Image
                alt={comic.title}
                src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
              />
            </CardImg>
            <ContainerDetails>
              <h1>{comic.title}</h1>
              <p>{comic.description}</p>
            </ContainerDetails>
          </Card>
          <Button onClick={handleClick}>Back to Comics</Button>
        </>
      )}
    </Container>
  );
};

export default Comic;
