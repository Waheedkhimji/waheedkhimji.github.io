import * as React from 'react';
import styled from 'styled-components';
import { photos } from 'Galleries/PortraitGallery';
import Gallery from 'react-photo-gallery';

import { smallTabletMQ } from 'styles/breakpoints';

const ImageContainer = styled.div`
  margin: 0 40px;
  ${smallTabletMQ(`
    margin: 0 15px;
  `)}
`;

const ImageGallery = styled(Gallery)`
  width: 100%;
  display: block;

  .img {
    width: 20%;
    height: auto;
  }
`;

export const Portrait: React.FC = () => {
  return (
    <ImageContainer>
      <ImageGallery photos={photos} margin={10}/>;
    </ImageContainer>
  )
};
