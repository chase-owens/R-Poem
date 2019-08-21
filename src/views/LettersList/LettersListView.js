import React, { useContext, Fragment } from 'react';
import { LettersContext } from '../../containers/Letters/LettersProvider';
import { ListContext } from '../../containers/LettersList/LettersListProvider';
import { GlobalState } from '../../index';
import LettersListItem from './LettersListItem';
import { startsWith } from '../../utils/startWith';
import { Header } from 'semantic-ui-react';
import Letterlabel from '../LetterLabel/LetterLabel';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
// import { get, set } from 'mobx';

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
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#ffd100'
    }
  }
};

const LettersListView = ({ classes, title }) => {
  const lettersContext = useContext(LettersContext);
  const listContext = useContext(ListContext);
  const globalState = useContext(GlobalState);
  console.log(globalState.author, globalState.poem);

  const handleChange = value => {
    title === 'Poets'
      ? globalState.setAuthor(value)
      : globalState.setPoem(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between'
        }}
      >
        <Header as='h2'>{title}</Header>
        <p>{listContext.list.length}</p>
      </div>

      {lettersContext.letters.alphabetArray.map(letter => (
        <Fragment>
          <Letterlabel letter={letter} />
          {listContext.list
            .filter(listItem => startsWith(listItem, letter))
            .map(listItem =>
              listItem === globalState.author ||
              (globalState.poem !== null &&
                globalState.poem.title === listItem) ? (
                <div
                  key={listItem}
                  value={listItem}
                  className={classes.selectedListItem}
                >
                  <LettersListItem content={listItem} />
                </div>
              ) : (
                <div
                  key={listItem}
                  value={listItem}
                  className={classes.listItem}
                  onClick={() => handleChange(listItem)}
                >
                  <LettersListItem content={listItem} />
                </div>
              )
            )}
        </Fragment>
      ))}
    </div>
  );
};

LettersListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(observer(LettersListView));
