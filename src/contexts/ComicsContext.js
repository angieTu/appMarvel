import React, { createContext, useState, useEffect } from "react";

const ComicsContext = createContext();

const ComicsProvider = ({ children }) => {
  const [comics, setComics] = useState([]);
  const [totalPagesComics, setTotalPagesComics] = useState(0);
  const [currentPageComics, setCurrentPageComics] = useState(1);
  const [offsetAPIComics, setOffsetAPIComics] = useState(0);

  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  useEffect(() => {
    const getComics = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?offset=${offsetAPIComics}?page=${currentPageComics}&limit=20&apikey=${API_KEY}`
      );
      const data = await response.json();
      setComics(data.data.results);
      setTotalPagesComics(data.data.total);
      setOffsetAPIComics(data.data.offset);
    };
    getComics();
  }, [offsetAPIComics]);

  return (
    <ComicsContext.Provider
      value={{
        comics,
        totalPagesComics,
        currentPageComics,
        offsetAPIComics,
        setOffsetAPIComics,
        setCurrentPageComics,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsContext;
export { ComicsProvider };
