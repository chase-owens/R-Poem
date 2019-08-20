import React from 'react';
import Nav from '../../views/Nav/Nav';
import cuadros from '../../images/cuadros.png';
import Literature from '../Literature/Literature';

const frost = 'rgba(999, 999, 999, 0.8)';

const Layout = () => {
  return (
    <div style={{ background: `url(${cuadros})`, minHeight: '100vh' }}>
      <nav
        style={{
          height: 80,
          background: frost
        }}
      >
        <Nav />
      </nav>
      <div style={{ height: 'calc(100vh - 80px)' }}>
        <Literature />
      </div>

      {/* <div
        style={{
          marginTop: 0,
          display: 'inline-block',
          textAlign: 'center',
          padding: '0 2px',
          height: 'calc(100vh - 80px)',
          color: '#cc0066',
          background: frost
        }}
      >
        <LettersProvider>
          <LettersView />
        </LettersProvider>
      </div>
      <div>
        <PoetsListView />
      </div> */}
    </div>
  );
};

export default Layout;
