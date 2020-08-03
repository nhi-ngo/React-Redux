import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      // check if elements being clicked on are inside of the form div then return immediately. Otherwise go ahead and call setOpen(false)
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false); // close the dropdown
    });
  }, []);

  const renderedOptions = options.map((option) => {
    // Filtering the options list. Null means do not render anything.
    if (option.value === selected.value) return null;

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
