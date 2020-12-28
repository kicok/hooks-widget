import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      //console.log(event.target);
      if (ref.current && ref.current.contains(event.target)) {
        // 클릭 focus가 이벤트의 target애 있을때면 아무것도 실행하지 않고 return
        // 클릭 focus가 이벤트의 target안에 있다는건 Dropdown 컴포턴트가 clicked 된것이므로 Dropdown내의 onClick 이벤트가 실행되어 setOpen(!open) 가 실행된다.
        console.log('contains');

        return;
      }
      console.log('Body Click');

      // 클릭 focus가 이벤트의 target을 벗어난 상태면 무조건 open 을 해제하여 close 시킨다.
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      console.log('remove');
      document.body.removeEventListener('click', onBodyClick);
    };
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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
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
