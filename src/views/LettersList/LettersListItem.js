import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import injectSheet from 'react-jss';

const styles = {
  listItem: {
    fontSize: 13,
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold'
    }
  },
  selectedListItem: {
    fontSize: 13,
    background: 'rgba(204, 0, 102, 0.8)',
    color: '#fff',
    '& i': {
      color: '#fff'
    },
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#ffd100'
    },
    '&:hover i': {
      color: '#ffd100'
    }
  }
};

const LettersListItem = ({ content, selected, classes }) => {
  return (
    <div className={selected ? classes.selectedListItem : classes.listItem}>
      <label style={{ cursor: 'pointer' }}>{content}</label>
      {selected && (
        <Button
          style={{
            float: 'right',
            margin: 0,
            padding: 0,
            height: '100%',
            background: 'transparent'
          }}
        >
          <Icon
            style={{ padding: '2.9px 0px 0px 0px', margin: 0 }}
            name='close'
          />
        </Button>
      )}
    </div>
  );
};

LettersListItem.propTypes = {
  content: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

export default injectSheet(styles)(observer(LettersListItem));
