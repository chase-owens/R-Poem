import React, { useEffect, useState, useContext } from 'react';
import LettersProvider from '../Letters/LettersProvider';
import { getPoets } from '../../api/api';
import { getPoemTitles } from '../../api/api';
import { GlobalState } from '../../index';
import { observer } from 'mobx-react';

// make API call to get the list

// pass the list into Provider value
export const ListContext = React.createContext([]);

// letters provider wraps children

const LettersListProvider = ({ children, list }) => {
  let [listWithData, setListWithData] = useState([]);
  const globalState = useContext(GlobalState);
  let author = globalState.author;

  useEffect(() => {
    getList(list, author)
      .then(res => setListWithData(res))
      .catch(err => console.log(err));
  }, [list, author]);
  return (
    <ListContext.Provider value={{ list: listWithData }}>
      <LettersProvider>{children}</LettersProvider>
    </ListContext.Provider>
  );
};

const getList = async (listType, author) => {
  console.log('Author: ', author);
  let list = [];
  switch (listType) {
    case 'authors':
      list = await getPoets();
      break;
    case 'poemTitles':
      console.log('titles: ', list);
      list = await getPoemTitles(author);
      console.log('titles: ', list);
      break;
    default:
      break;
  }
  return list;
};

export default observer(LettersListProvider);

// Bring in global state
// Filter poems by author if author !== null
