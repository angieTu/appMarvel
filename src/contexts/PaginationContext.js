import React, { createContext, useState } from "react";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offsetAPI, setOffsetAPI] = useState(0);

  const previousPage = () => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 1);
    setOffsetAPI(currentPage > 0 ? offsetAPI - 20 : offsetAPI);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setOffsetAPI(offsetAPI + 20);
  };

  const handleFirstPageClick = () => {
    setCurrentPage(1);
    setOffsetAPI(0);
  };

  const handleLastPageClick = () => {
    setCurrentPage(1493 / 20);
    setOffsetAPI(1493 - 20);
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        previousPage,
        nextPage,
        offsetAPI,
        setOffsetAPI,
        handleFirstPageClick,
        handleLastPageClick,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
export { PaginationProvider };
