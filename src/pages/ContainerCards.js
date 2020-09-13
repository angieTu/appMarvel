import React, { useContext } from "react";

import Container from "../components/Container";
import ShortCard from "../components/ShortCard";
import Pagination from "../components/Pagination";

import ComicsContext from "../contexts/ComicsContext";
import CharactersContext from "../contexts/CharactersContext";

const ContainerCards = ({ type, data }) => {
  const {
    currentPageCharacters,
    offsetAPICharacters,
    setOffsetAPICharacters,
    setCurrentPageCharacters,
    totalPagesCharacters,
  } = useContext(CharactersContext);
  const {
    currentPageComics,
    offsetAPIComics,
    setOffsetAPIComics,
    setCurrentPageComics,
    totalPagesComics,
  } = useContext(ComicsContext);

  return (
    <Container className="cards-pagination-container">
      <Container className="map-cards-container">
        {data &&
          data.map((d) => (
            <ShortCard
              src={`${d.thumbnail.path}.${d.thumbnail.extension}`}
              title={type === "comics" ? d.title : d.name}
              type={type}
              id={d.id}
            ></ShortCard>
          ))}
      </Container>
      <Pagination
        currentPage={
          type === "comics" ? currentPageComics : currentPageCharacters
        }
        offsetAPI={type === "comics" ? offsetAPIComics : offsetAPICharacters}
        setOffsetAPI={
          type === "comics" ? setOffsetAPIComics : setOffsetAPICharacters
        }
        setCurrentPage={
          type === "comics" ? setCurrentPageComics : setCurrentPageCharacters
        }
        totalPages={type === "comics" ? totalPagesComics : totalPagesCharacters}
      />
    </Container>
  );
};

export default ContainerCards;
