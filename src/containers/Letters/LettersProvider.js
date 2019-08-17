import React from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetArray = alphabet.split('');

export const LettersContext = React.createContext([]);

const LettersProvider = ({ children }) => {
  // return <LettersView letters={alphabetArray} />;

  return (
    <LettersContext.Provider value={{ letters: { alphabetArray } }}>
      {children}
    </LettersContext.Provider>
  );
};

export default LettersProvider;
