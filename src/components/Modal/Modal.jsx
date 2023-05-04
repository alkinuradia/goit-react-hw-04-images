import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Mod } from './Modal.styled';

export const Modal = props => {
  const handlCloseModal = event => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };
  console.log(props.urlModal);
  return (
    <Overlay onClick={handlCloseModal}>
      <Mod>
        <img src={props.urlModal} alt="" />
      </Mod>
    </Overlay>
  );
};

Modal.propTypes = {
  props: PropTypes.object,
};
