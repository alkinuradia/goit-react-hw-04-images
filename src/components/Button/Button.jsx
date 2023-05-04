import React from 'react';
import { BtnLoadMoreSection, BtnLoadMore } from './Button.styled';

import PropTypes from 'prop-types';

export const Button = props => {
  const handleBtnLoadMore = () => {
    props.onBtnLM();
  };

  return (
    <BtnLoadMoreSection>
      <BtnLoadMore type="button" onClick={handleBtnLoadMore}>
        Load More
      </BtnLoadMore>
    </BtnLoadMoreSection>
  );
};

Button.propTypes = {
  props: PropTypes.object,
};
