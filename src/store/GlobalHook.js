import React, { useState, useEffect } from 'react';

const GlobalPoetHook = poet => {
  const [author, setAuthor] = useState(poet);

  return <div />;
};

export default GlobalPoetHook;
