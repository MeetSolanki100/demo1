

import React, { useState } from 'react';

export default function Contact() {
  const [inputValue, setInputValue] = useState('00');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <input type="text" onChange={handleInputChange}/>
    <button onClick={handleInputChange} value={inputValue}>translate</button>
    <h1>{inputValue}</h1>
    </>
  );
}
