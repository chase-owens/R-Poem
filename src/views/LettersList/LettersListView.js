import React, { useContext, Fragment } from 'react';
import { LettersContext } from '../../containers/Letters/LettersProvider';
import { ListContext } from '../../containers/LettersList/LettersListProvider';
import LettersListItem from './LettersListItem';

const LettersListView = () => {
  const lettersContext = useContext(LettersContext);
  console.log(lettersContext);
  const listContext = useContext(ListContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {lettersContext.letters.alphabetArray.map(letter => (
        <Fragment>
          <LettersListItem content={letter} />
        </Fragment>
      ))}
    </div>
  );
};

// LettersListView.propTypes = {
//   letters: PropTypes.array.isRequired
// };

export default LettersListView;
