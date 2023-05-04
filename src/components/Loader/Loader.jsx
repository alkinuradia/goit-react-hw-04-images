import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox, LoaderItem } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      <br />
      <LoaderBox>
        <LoaderItem>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#255dd8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </LoaderItem>
      </LoaderBox>
    </>
  );
};
