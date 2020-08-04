import React, { useState } from 'react';
import { items, options } from '../data';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <h1>Widgets App</h1>
      {/* <Accordion items={itemsData} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null}
    </div>
  );
};
