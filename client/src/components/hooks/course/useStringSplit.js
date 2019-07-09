import { useState } from 'react';

const useStringSplit = () => {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  const stringSplit = string => {
    let str = string.split('-');
    setFirstWord(() => {
      return str[0];
    });
    setSecondWord(() => {
      return str[1];
    });
  };

  return {
    stringSplit,
    firstWord,
    secondWord
  };
};

export default useStringSplit;
