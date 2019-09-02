import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const NavItem = ({ navItem }) => {
  return (
    <Button
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        color: '#fff'
      }}
    >
      <p>{navItem.title}</p>
      <div style={{ margin: 'auto' }}>
        <Icon class='icon' name={navItem.icon} />
      </div>
    </Button>
  );
};

export default NavItem;
