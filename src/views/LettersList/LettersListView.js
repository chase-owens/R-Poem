import React, { useContext, Fragment } from 'react';
import { LettersContext } from '../../containers/Letters/LettersProvider';
import { ListContext } from '../../containers/LettersList/LettersListProvider';
import LettersListItem from './LettersListItem';
import { startsWith } from '../../utils/startWith';

const LettersListView = () => {
  const lettersContext = useContext(LettersContext);
  console.log(lettersContext);
  const listContext = useContext(ListContext);
  console.log(listContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {lettersContext.letters.alphabetArray.map(letter => (
        <Fragment>
          <LettersListItem content={letter} />
          {listContext.list
            .filter(listItem => startsWith(listItem, letter))
            .map(listItem => (
              <LettersListItem content={listItem} />
            ))}
        </Fragment>
      ))}
    </div>
  );
};

// LettersListView.propTypes = {
//   letters: PropTypes.array.isRequired
// };

export default LettersListView;
