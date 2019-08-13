import React, { useState, useEffect } from 'react';
import ListContainer from '../ListContainers/ListQueryContainer';
import { getPoems } from '../../utils/getPoems';

const PoemsContainer = () => {
  const [query, setQuery] = useState('');
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    setPoems(getPoems);
  }, [query]);

  return <ListContainer query={query} setQuery={setQuery} children={poems} />;
};

export default PoemsContainer;
