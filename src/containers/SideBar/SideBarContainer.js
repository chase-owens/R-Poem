import React from 'react';
import injectSheet from 'react-jss';

const frost = 'rgba(999, 999, 999, 0.8)';

const styles = {
  sideBar: {
    marginTop: 0,
    display: 'inline-block',
    padding: '0 2px',
    height: '100%',
    color: '#cc0066',
    background: frost
  }
};

const SideBarContainer = ({ children, classes }) => {
  return <div className={classes.sideBar}>{children}</div>;
};

export default injectSheet(styles)(SideBarContainer);
