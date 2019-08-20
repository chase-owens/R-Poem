import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  scrollContainer: {
    overflowY: 'scroll',
    height: '100%',
    width: '100%'
  }
};

const VerticalScrollContainer = ({ children, classes }) => {
  return <div className={classes.scrollContainer}>{children}</div>;
};

export default injectSheet(styles)(VerticalScrollContainer);
