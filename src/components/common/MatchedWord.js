import React from 'react';

export default function MatchedWord(props) {
  const compare = () => {
    let testWordArray = props.testWord.split('');
    let enteredWordArray = props.enteredWord.split('');
    console.log(testWordArray);
    console.log(enteredWordArray);
    let data = '';
    data = props.testWord.split('').map((element, index) => {
      if (enteredWordArray[index]) {
        if (element === enteredWordArray[index]) {
          return <span className="window-correct">{testWordArray[index]}</span>;
        }
        if (element !== enteredWordArray[index]) {
          return <span style={{ color: '#445298' }}>{testWordArray[index]}</span>;
        }
      } else {
        return <span>{testWordArray[index]}</span>;
      }
    });
    return data;
  };

  return <div>{compare()}</div>;
}
