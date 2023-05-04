import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import Notiflix from 'notiflix';
import { Gallery } from './ImageGallery.styled';

const URL = 'https://pixabay.com/api/?';
const API_KEY = '35978701-4ba0c349421f32e567be76f4c';

export function ImageGallery(props) {
  const [galleryImage, setGalleryImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const { galleryName, page, per_page, onBtnLoadMore, urlLargeImage } = props;

  useEffect(() => {
    if (page === 1) setGalleryImage([]);
    if (galleryName !== '') {
      setLoading(true);
      fetch(
        `${URL}key=${API_KEY}&q=${galleryName}
        &image_type=photo&orientation=horizontal
        &per_page=${per_page}
        &page=${page}`
      )
        .then(responce => responce.json())
        .then(gallery => {
          if (gallery.totalHits === 0) {
            Notiflix.Notify.failure('Gallery not found');

            onBtnLoadMore(false);

            setGalleryImage([]);
          } else {
            onBtnLoadMore(true);
          }

          setGalleryImage(prev => prev.concat(gallery.hits));

          setTotalHits(gallery.totalHits);
        })
        .catch(error => console.log('ERROR'))
        .finally(() => {
          setLoading(false);
        });
    } else setGalleryImage([]);
  }, [page, galleryName, per_page, onBtnLoadMore]);

  if (galleryImage.length === totalHits && page > 1) {
    onBtnLoadMore(false);
  }

  const handlModal = urlLargImage => {
    urlLargeImage(urlLargImage);
  };

  const images = galleryImage;

  return (
    <div>
      <Gallery>
        {images &&
          images.map(image => {
            return (
              <div key={image.id}>
                <ImageGalleryItem
                  imageReview={image.webformatURL}
                  largeImage={image.largeImageURL}
                  altImage={image.tags}
                  onModal={handlModal}
                />
              </div>
            );
          })}
      </Gallery>
      {loading && <Loader />}
    </div>
  );
}

ImageGallery.propTypes = {
  props: PropTypes.object,
};

// eslint-disable-next-line
