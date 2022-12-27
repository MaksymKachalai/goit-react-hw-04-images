import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ smallImage, largeImage, tags }) {
  const [isModalActive, setIsModalActive] = useState(false);

  const toggleModal = () => {
    setIsModalActive(prevState => !prevState);
  };

  return (
    <>
      <li className="gallery-item" onClick={toggleModal}>
        <img className="gallery-item__image" src={smallImage} alt={tags} />
      </li>
      {isModalActive && (
        <Modal handleModalClick={toggleModal}>
          <img src={largeImage} alt={tags} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = { isModalActive: PropTypes.bool };
