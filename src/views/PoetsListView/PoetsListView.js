import React from 'react';
import LettersListProvider from '../../containers/LettersList/LettersListProvider';
import LettersListView from '../LettersList/LettersListView';

const PoetsListView = () => {
  return (
    <LettersListProvider list={'authors'}>
      <div style={{ width: 210 }}>
        <LettersListView title='Poets' />
      </div>
    </LettersListProvider>
  );
};

export default PoetsListView;
