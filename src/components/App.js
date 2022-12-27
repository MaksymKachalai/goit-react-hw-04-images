import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';

export default function App() {
  const [query, setQuery] = useState('');

  const onFormSubmit = query => {
    setQuery(query);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery query={query} />
    </div>
  );
}

App.propTypes = {
  query: PropTypes.string,
};
