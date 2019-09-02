import React, { useContext, Fragment } from 'react';
import { LettersContext } from '../../containers/Letters/LettersProvider';
import { ListContext } from '../../containers/LettersList/LettersListProvider';
import { GlobalState } from '../../index';
import LettersListItem from './LettersListItem';
import { startsWith } from '../../utils/startWith';
import { Header } from 'semantic-ui-react';
import Letterlabel from '../LetterLabel/LetterLabel';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
// import { get, set } from 'mobx';

const LettersListView = ({ title }) => {
  const lettersContext = useContext(LettersContext);
  const listContext = useContext(ListContext);
  const globalState = useContext(GlobalState);
  console.log(globalState.author, globalState.poem);

  const handleChange = (value, selected) => {
    if (selected) {
      title === 'Poets' && globalState.setAuthor(null);
      title === 'Poems' && globalState.setPoem(null);
    } else {
      title === 'Poets'
        ? globalState.setAuthor(value)
        : globalState.setPoem(value);
    }
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
            .map(listItem => {
              let selected =
                (globalState.author !== null &&
                  listItem === globalState.author) ||
                (globalState.poem !== null &&
                  globalState.poem.title === listItem);
              return (
                <div
                  key={listItem}
                  value={listItem}
                  onClick={() => handleChange(listItem, selected)}
                >
                  <LettersListItem content={listItem} selected={selected} />
                </div>
              );
            })}
        </Fragment>
      ))}
    </div>
  );
};

LettersListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default observer(LettersListView);
