import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const ContainerCard = styled.div`
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
  box-shadow: 0px 0px 39px -6px black;
  width: 70%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #151515;
  color: #fff;
  padding-bottom: 26px;
  flex-direction: column;

  & > h1 {
    font-size: 18px;
  }
`;
const Container = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const CardImg = styled.div`
  overflow: hidden;
  height: 500px;
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
const ContainerMaps = styled.div`
  width: 50%;
  margin-left: 82px;
`;

const ListItem = styled.li`
  list-style: none;
`;
const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    width: 100%;
    margin-left: 20px;
    border-radius: 38px 0px;
  }
`;
const ContainerDescription = styled.div`
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

const Character = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const history = useHistory();
  const { characterID } = useParams();

  const [character, setCharacter] = useState({});
  const [seriesOn, setSeriesOn] = useState(false);
  const [storiesOn, setStoriesOn] = useState(false);
  const [comicsOn, setComicsOn] = useState(false);

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

  const handleComicsClick = () => setComicsOn(!comicsOn);
  const handleSeriesClick = () => setSeriesOn(!seriesOn);
  const handleStoriesClick = () => setStoriesOn(!storiesOn);

  return (
    <ContainerCard>
      {character && (
        <Card>
          <Container>
            <CardImg>
              <Image
                src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              />
            </CardImg>
            <ContainerDescription>
              <h1>{character.name}</h1>
              <p>{character.description}</p>
            </ContainerDescription>
          </Container>
          <ContainerOptions>
            <ContainerButton>
              <Button onClick={handleComicsClick}>Show Comics</Button>
              <Button onClick={handleSeriesClick}>Show Series</Button>
              <Button onClick={handleStoriesClick}>Show Stories</Button>
            </ContainerButton>

            {character.series?.items && seriesOn === true && (
              <ContainerMaps>
                <h2>Series:</h2>
                {character.series?.items?.map((comic, index) => (
                  <ListItem key={index}>{comic.name}</ListItem>
                ))}
              </ContainerMaps>
            )}

            {character.comics?.items && comicsOn === true && (
              <ContainerMaps>
                <h2>Comics:</h2>
                {character.comics?.items?.map((comic, index) => (
                  <ListItem key={index}>{comic.name}</ListItem>
                ))}
              </ContainerMaps>
            )}
            {character.stories?.items && storiesOn && (
              <ContainerMaps>
                <h2>Stories:</h2>
                {character.stories?.items?.map((comic, index) => (
                  <ListItem key={index}>{comic.name}</ListItem>
                ))}
              </ContainerMaps>
            )}
          </ContainerOptions>
        </Card>
      )}
      <Button onClick={handleClick}>Back to Characters</Button>
    </ContainerCard>
  );
};

export default Character;
