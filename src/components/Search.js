import React from "react";

function Search({ handleSearch }) {
  function handleChange(e) {
    const searchString = e.target.value;
    handleSearch(searchString);
  }
  return (
    <div className='ui search'>
      <div className='ui icon input'>
        <input className='prompt' onChange={handleChange} />
        <i className='search icon' />
      </div>
    </div>
  );
}

export default Search;
