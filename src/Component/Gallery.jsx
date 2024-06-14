import React, { useState } from 'react';
import '../Styles/GalleryStyle.css'
import Ab from '../assets/Ab.png'
import aboutBg from '../assets/AboutBG.jpeg'
import Banner from '../assets/Banner.jpg'
import Image from '../assets/image.png'
import Modal from 'react-modal';
import VMImage from "../assets/VMImage.jpeg"
import Image9 from '../assets/Image9.jpg'
import Banner1 from '../assets/Banner1.jpeg'


const Gallery = () => {
  const images = [
    Ab,
    aboutBg,
    Banner,
    Banner1,
    VMImage,
    Image9
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-component">
    <h2>Image Gallery</h2>
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item" onClick={() => openModal(image)}>
          <img src={image} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
    {selectedImage && (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>X</button>
        <img src={selectedImage} alt="Selected" className="modal-image" />
      </Modal>
    )}
  </div>
  );
};

export default Gallery;
