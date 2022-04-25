import * as React from 'react';
import styled from 'styled-components';
import { photos } from 'Galleries/LandscapeGallery';
import Gallery from 'react-photo-gallery';

const ImageContainer = styled.div`
  margin: 0 40px;
`;

const ImageGallery = styled(Gallery)`
  width: 100%;
  display: block;
`;

export const Landscape: React.FC = () => {
  return (
    <ImageContainer>
      <ImageGallery photos={photos} margin={10} />;
    </ImageContainer>
  )
};
