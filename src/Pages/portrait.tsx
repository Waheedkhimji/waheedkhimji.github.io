import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

import { largeMobileMQ } from 'styles/breakpoints';
import { photos } from 'Galleries/PortraitGallery';
import Gallery from 'react-photo-gallery';

const ImageContainer = styled.div`
  margin: 0 40px;
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
