import React from 'react';
import { navObjects } from '../../containers/NavContainer/nav.config';
import NavItem from './NavItem';

const NavItems = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {navObjects().map(item => (
        <NavItem key={item.title} navItem={item} />
      ))}
    </div>
  );
};

export default NavItems;
