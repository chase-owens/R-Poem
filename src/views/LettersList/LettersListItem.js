import React from 'react';
// import { PropTypes } from 'mobx-react';
import PropTypes from 'prop-types';

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

export default LettersListItem;
