import React from 'react';
import LettersProvider from '../Letters/LettersProvider';

// make API call to get the list

// pass the list into Provider value
export const ListContext = React.createContext([]);

// letters provider wraps children

const LettersListProvider = async ({ children, getList }) => {
  return (
    <ListContext.Provider value={{ getList }}>
      <LettersProvider>{children}</LettersProvider>
    </ListContext.Provider>
  );
};

export default LettersListProvider;
