import React from 'react';
import PropTypes from 'prop-types';
import { ItemGallery, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = props => {
  const urlImage = props.imageReview;
  const altImg = props.altImage;
  const urlLargeImage = props.largeImage;

  const handelClickImage = event => {
    props.onModal(urlLargeImage);
  };

  return (
    <ItemGallery onClick={handelClickImage}>
      <Image src={urlImage} alt={altImg} />
    </ItemGallery>
  );
};

ImageGalleryItem.propTypes = {
  props: PropTypes.object,
};
