import { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export function App() {
  const [searchGallery, setSearchGallery] = useState('');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [onModal, setOnModal] = useState(false);
  const [visibleBtnLoadMore, setVisibleBtnLoadMore] = useState(false);
  const [urlLargeImage, setUrlLargeImage] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') setOnModal(false);
    });
  }, [onModal]);

  const handleFormSubmit = searchGallery => {
    setSearchGallery(searchGallery);
    setPage(1);
  };

  const handleModal = urlLargeImg => {
    setOnModal(true);
    setUrlLargeImage(urlLargeImg);
  };

  const isCloseModal = () => {
    setOnModal(false);
    window.removeEventListener('keydown', event => {
      if (event.code === 'Escape') setOnModal(false);
    });
  };

  const btnLoadMore = useCallback(btn => {
    setVisibleBtnLoadMore(btn);
  }, []);

  const onClickLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar onSearchGallery={handleFormSubmit} />
      <ImageGallery
        galleryName={searchGallery}
        page={page}
        per_page={per_page}
        onBtnLoadMore={btnLoadMore}
        urlLargeImage={handleModal}
      />
      {onModal && <Modal urlModal={urlLargeImage} closeModal={isCloseModal} />}
      {visibleBtnLoadMore && <Button onBtnLM={onClickLoadMore} />}
    </div>
  );
}
