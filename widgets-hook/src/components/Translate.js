import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Vietnamese',
    value: 'vi',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('hello');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
      <hr />
      <h4 className="ui header">Output</h4>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;

// https://translation.googleapis.com/language/translate/v2
