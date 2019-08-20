import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { LettersContext } from '../../containers/Letters/LettersProvider';

const frost = 'rgba(999, 999, 999, 0.8)';

const styles = {
  lettersViewContainer: {
    marginTop: 0,
    display: 'inline-block',
    textAlign: 'center',
    padding: '0 2px',
    height: 'calc(100vh - 80px)',
    color: '#cc0066',
    background: frost
  },
  lettersWrapStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0
  },
  letterStyle: {
    fontSize: 12,
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    '&:hover': {
      fontSize: 17
    }
  }
};

const LettersView = ({ classes }) => {
  const context = useContext(LettersContext);
  return (
    <div className={classes.lettersWrapStyle}>
      {context.letters.alphabetArray.map(letter => (
        <p key={letter} className={classes.letterStyle}>
          {letter}
        </p>
      ))}
    </div>
  );
};

export default injectSheet(styles)(LettersView);
