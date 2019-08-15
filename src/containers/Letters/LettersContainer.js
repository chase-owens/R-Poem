import React from 'react';
import LettersView from '../../views/Letters/LettersView';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');

const LettersContainer = () => {
  return <LettersView letters={alphabetArray} />;
};

export default LettersContainer;
