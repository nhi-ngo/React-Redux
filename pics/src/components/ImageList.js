import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const renderedList = images.map((image) => <ImageCard key={image.id} image={image} />);

  return (
    <div className="image-list">{renderedList}</div>
  );
};

export default ImageList;

// Repeated use of image => Destructure
// const images = props.images.map(image => <img key={image.id} src={image.urls.regular} alt={image.description} />);
