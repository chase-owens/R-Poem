import React from 'react';
import LettersListProvider from '../../containers/LettersList/LettersListProvider';
import LettersListView from '../LettersList/LettersListView';

const PoemsListView = () => {
  return (
    <LettersListProvider list='poemTitles'>
      <div style={{ width: 210 }}>
        <LettersListView title='Poems' />
      </div>
    </LettersListProvider>
  );
};

export default PoemsListView;
