import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = event => {
    const { value } = event.currentTarget;
    setSearchQuery(value);
  };

  const onFormHandler = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className="searchbar">
      <form className="search-form" onSubmit={onFormHandler}>
        <button type="submit" className="search-form__button">
          <span className="search-form__button-label">Search</span>
        </button>

        <input
          className="search-form__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
};
