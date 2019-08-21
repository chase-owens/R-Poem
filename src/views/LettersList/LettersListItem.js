import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const LettersListItem = ({ content }) => {
  return (
    <div>
      <label style={{ cursor: 'pointer' }}>{content}</label>
    </div>
  );
};

LettersListItem.propTypes = {
  content: PropTypes.string.isRequired
};

export default observer(LettersListItem);
