import React from 'react';
import Nav from '../../views/Nav/Nav';
import cuadros from '../../images/cuadros.png';

// const frost = 'rgba(999, 999, 999, 0.8)';

const Layout = ({ children }) => {
  return (
    <div style={{ background: `url(${cuadros})`, minHeight: '100vh' }}>
      <nav
        style={{
          height: 80,
          background: 'rgba(204, 0, 102, 0.8)'
        }}
      >
        <Nav />
      </nav>
      <div style={{ height: 'calc(100vh - 80px)' }}>{children}</div>
    </div>
  );
};

export default Layout;
