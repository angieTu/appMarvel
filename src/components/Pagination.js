import React from "react";
import styled from "styled-components";

const PaginationStyled = styled.div`
  padding-bottom: 40px;

  & button {
    font: 400 14px/1.2 "Roboto Bold", "Trebuchet MS", Helvetica, Arial,
      sans-serif;
    padding: 8px 20px;
    margin: 0 6px;
    background-color: #e62429;
    border: none;
    border-radius: 38px 0px;

    &:hover {
      background-color: #9f0013;
    }
  }
`;

const Pagination = ({
  currentPage,
  offsetAPI,
  setOffsetAPI,
  setCurrentPage,
  totalPages,
}) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setOffsetAPI(offsetAPI + 20);
  };

  const handleFirstPageClick = () => {
    setCurrentPage(1);
    setOffsetAPI(0);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    setOffsetAPI(offsetAPI - 20);
  };

  const handleLastPageClick = () => {
    setCurrentPage(Math.round(totalPages / 20));
    setOffsetAPI(Math.round(totalPages - 20));
  };

  return (
    <PaginationStyled>
      <button onClick={handleFirstPageClick}>First Page</button>
      {currentPage > 1 && (
        <button onClick={previousPage}> {currentPage - 1}</button>
      )}
      <span>Page: {currentPage}</span>
      {currentPage !== Math.round(totalPages / 20) && (
        <button onClick={nextPage}>{currentPage + 1}</button>
      )}
      <button onClick={handleLastPageClick}>Last Page</button>
    </PaginationStyled>
  );
};

export default Pagination;
