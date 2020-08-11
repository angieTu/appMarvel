import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  font: 400 14px/1.2 "Roboto Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
  color: #202020;
`;

const Card = styled.div`
  width: 15%;
  height: 346px;
  margin: 27px 24px;
  transition: 0.3s;
  overflow: hidden;

  & > h1 {
    font-size: 18px;
    margin-left: 10px;
    height: 30%;
    font-weight: lighter;
  }

  &:hover {
    transform: translateY(-12px);
  }
`;

const CardImg = styled.div`
  height: 70%;
  box-shadow: 0 26px 24px -16px grey;
  margin: 19px auto;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  object-position: top-center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [offsetAPI, setOffsetAPI] = useState(0);

  const history = useHistory();

  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  useEffect(() => {
    const getComics = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?offset=${offsetAPI}&limit=20&apikey=${API_KEY}`
      );
      const data = await response.json();
      setComics(data.data.results);
      setTotalPages(data.data.total);
      setOffsetAPI(data.data.offset);
    };
    getComics();
  }, [offsetAPI]);

  const handleClick = (id) => {
    history.push(`/comics/${id}`);
  };
  return (
    <Container>
      <ContainerCards>
        {comics &&
          comics.map((comic) => (
            <Card key={comic.id} onClick={() => handleClick(comic.id)}>
              <CardImg>
                <Image
                  alt={comic.title}
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                ></Image>
              </CardImg>
              <h1>{comic.title}</h1>
            </Card>
          ))}
      </ContainerCards>
      <Pagination
        currentPage={currentPage}
        offsetAPI={offsetAPI}
        setOffsetAPI={setOffsetAPI}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default Comics;
