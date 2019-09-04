import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const NavItem = ({ navItem }) => {
  return (
    <Link to={navItem.destination}>
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
    </Link>
  );
};

export default NavItem;
