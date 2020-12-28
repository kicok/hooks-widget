import React, { useEffect, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        console.log(event.target);
        console.log('Body Click');
        setOpen(false);
      },
      { capture: true }
    );
  }, []);
  const renderedOptions = options.map((option) => {
    const active = selected === option ? 'active' : '';
    // if (option.value === selected.value) {
    //   return null;
    // }
    return (
      <div
        key={option.value}
        className={`item ${active}`}
        onClick={() => {
          console.log('Item Click');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            console.log('Dropdown clicked');
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open && 'visible active'}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open && 'visible transition'}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
