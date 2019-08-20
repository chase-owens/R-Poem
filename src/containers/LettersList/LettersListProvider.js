import React, { useEffect, useState } from 'react';
import LettersProvider from '../Letters/LettersProvider';
import { getPoets } from '../../api/api';
import { getPoemTitles } from '../../api/api';

// make API call to get the list

// pass the list into Provider value
export const ListContext = React.createContext([]);

// letters provider wraps children

const LettersListProvider = ({ children, list }) => {
  let [listWithData, setListWithData] = useState([]);

  useEffect(() => {
    getList(list)
      .then(res => setListWithData(res))
      .catch(err => console.log(err));
  }, [list]);
  return (
    <ListContext.Provider value={{ list: listWithData }}>
      <LettersProvider>{children}</LettersProvider>
    </ListContext.Provider>
  );
};

const getList = async listType => {
  let list = [];
  switch (listType) {
    case 'authors':
      list = await getPoets();
      break;
    case 'poemTitles':
      console.log('titles: ', list);
      list = await getPoemTitles();
      console.log('titles: ', list);
      break;
    default:
      break;
  }
  console.log('GOT LIST: ', list);
  return list;
};

export default LettersListProvider;
