import React from "react";

import Container from "./Container";
import Button from "./Button";
import Span from "./Span";

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
    <Container className="pagination-container">
      <Button onClick={handleFirstPageClick}>First Page</Button>
      {currentPage > 1 && (
        <Button onClick={previousPage}> {currentPage - 1}</Button>
      )}
      <Span>Page: {currentPage}</Span>
      {currentPage !== Math.round(totalPages / 20) && (
        <Button onClick={nextPage}>{currentPage + 1}</Button>
      )}
      <Button onClick={handleLastPageClick}>Last Page</Button>
    </Container>
  );
};

export default Pagination;
