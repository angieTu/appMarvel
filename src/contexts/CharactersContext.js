import React, { createContext, useState, useEffect } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const [characters, setCharacters] = useState([]);
  const [totalPagesCharacters, setTotalPagesCharacters] = useState(0);
  const [currentPageCharacters, setCurrentPageCharacters] = useState(1);
  const [offsetAPICharacters, setOffsetAPICharacters] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?offset=${offsetAPICharacters}?page=${currentPageCharacters}&limit=20&apikey=${API_KEY}`
      );
      const data = await response.json();
      setCharacters(data.data.results);
      setTotalPagesCharacters(data.data.total);
      setOffsetAPICharacters(data.data.offset);
    };
    getCharacters();
  }, [currentPageCharacters]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalPagesCharacters,
        currentPageCharacters,
        offsetAPICharacters,
        setOffsetAPICharacters,
        setCurrentPageCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
export { CharactersProvider };
