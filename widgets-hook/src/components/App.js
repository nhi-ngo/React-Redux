import React, { useState } from 'react';
import { items, options } from '../data';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1>Widgets App</h1>
      {/* <Accordion items={itemsData} /> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
    </div>
  );
};
