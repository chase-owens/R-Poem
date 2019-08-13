import React, { useState } from 'react';
import Search from '../views/Search';

const ListQueryContainer = props => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      {props.children}
    </div>
  );
};

export default ListQueryContainer;
