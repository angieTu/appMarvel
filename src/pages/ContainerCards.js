import React, { useContext } from "react";

import { DotLoader } from "react-spinners";
import { css } from "@emotion/core";

import Container from "../components/Container";
import ShortCard from "../components/ShortCard";
import Pagination from "../components/Pagination";
import ScrollToTop from "../components/ScrollToTop";

import ComicsContext from "../contexts/ComicsContext";
import CharactersContext from "../contexts/CharactersContext";

const override = css`
  & div {
    background-color: red;
  }
`;

const ContainerCards = ({ type, data }) => {
  const {
    currentPageCharacters,
    offsetAPICharacters,
    setOffsetAPICharacters,
    setCurrentPageCharacters,
    totalPagesCharacters,
    isLoadingCharacters,
  } = useContext(CharactersContext);
  const {
    currentPageComics,
    offsetAPIComics,
    setOffsetAPIComics,
    setCurrentPageComics,
    totalPagesComics,
    isLoadingComics,
  } = useContext(ComicsContext);

  const isLoad = type === "comics" ? isLoadingComics : isLoadingCharacters;

  return (
    <>
      {(type === "comics" ? isLoadingComics : isLoadingCharacters) && !data && (
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
      {(type === "comics" ? !isLoadingComics : !isLoadingCharacters) && data && (
        <Container className="cards-pagination-container">
          <ScrollToTop />
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
            offsetAPI={
              type === "comics" ? offsetAPIComics : offsetAPICharacters
            }
            setOffsetAPI={
              type === "comics" ? setOffsetAPIComics : setOffsetAPICharacters
            }
            setCurrentPage={
              type === "comics"
                ? setCurrentPageComics
                : setCurrentPageCharacters
            }
            totalPages={
              type === "comics" ? totalPagesComics : totalPagesCharacters
            }
          />
        </Container>
      )}
    </>
  );
};

export default ContainerCards;
