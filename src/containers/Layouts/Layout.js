import React from 'react';
import Nav from '../../views/Nav/Nav';
import cuadros from '../../images/cuadros.png';

const Layout = () => {
  return (
    <div style={{ background: `url(${cuadros})`, minHeight: '100vh' }}>
      <Nav />
    </div>
  );
};

export default Layout;
