import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageApi from '../../service/image-api';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import Loader from '../Loader/Loader';
import './ImageGallery.css';

export default function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('second');
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    ImageApi(query)
      .then(images => {
        setImages(images.hits);
        setPage(2);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoader(false));
  }, [query]);

  const handleButtonClick = () => {
    setPage(page + 1);
    setIsLoader(true);

    ImageApi(query, page)
      .then(images => setImages(prevState => [...prevState, ...images.hits]))
      .catch(error => setError(error))
      .finally(() => setIsLoader(false));
  };

  const isImages = Boolean(images.length);
  return (
    <>
      <ul className="image-gallery">
        {error &&
          images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImage={webformatURL}
                largeImage={largeImageURL}
                tags={tags}
              />
            );
          })}
      </ul>
      {isLoader && <Loader />}
      {isImages && <ButtonLoadMore onClick={handleButtonClick} />}
    </>
  );
}

ImageGallery.propTypes = {
  error: PropTypes.string,
  page: PropTypes.number,
  isLoader: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      hits: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          webformatURL: PropTypes.string,
          largeImageURL: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    })
  ),
};
