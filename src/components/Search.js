import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  console.log('I RUN WITH EVERY RENDER');
  useEffect(() => {
    console.log('I only run once');
  }, []);
  // []      : Run at initial render
  // nothing : Run at initial render, Run after every rerender
  // [data]  : Run at initial render, Run after every rerender if data has changed since last render

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default Search;
