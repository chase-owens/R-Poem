import React, { useContext, Fragment } from 'react';
import { LettersContext } from '../../containers/Letters/LettersProvider';
import { ListContext } from '../../containers/LettersList/LettersListProvider';
import LettersListItem from './LettersListItem';
import { startsWith } from '../../utils/startWith';
import { Header } from 'semantic-ui-react';
import Letterlabel from '../LetterLabel/LetterLabel';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  listItem: {
    fontSize: 13,
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold'
    }
  }
};

const LettersListView = ({ classes, title }) => {
  const lettersContext = useContext(LettersContext);
  const listContext = useContext(ListContext);

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
            .map(listItem => (
              <div className={classes.listItem}>
                <LettersListItem content={listItem} />
              </div>
            ))}
        </Fragment>
      ))}
    </div>
  );
};

LettersListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(LettersListView);
