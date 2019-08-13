import React, { useState, useEffect } from 'react';

const AuthorsContainer = () => {
  const [authors, setAuthors] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setAuthors('');
  }, []);
  return <div />;
};

export default AuthorsContainer;
