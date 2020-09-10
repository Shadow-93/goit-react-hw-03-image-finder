import React from 'react';

const Searchbar = ({onSubmit}) => {

    return(
    <header className="Searchbar">
    <form className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
  
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onSubmit}
      />
    </form>
  </header>)
}

export default Searchbar