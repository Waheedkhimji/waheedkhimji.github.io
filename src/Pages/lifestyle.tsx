import * as React from 'react';
import styled from 'styled-components';

import { largeMobileMQ } from 'styles/breakpoints';

import { photos } from 'Galleries/LifestyleGallery';
import Gallery from 'react-photo-gallery';

const Container = styled.div`
  flex-direction: row;

  ul {
    ${largeMobileMQ(`
        padding-inline-start: 15px;
    `)}
  }

  li {
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  margin: 0 40px;
`;

const ImageGallery = styled(Gallery)`
  width: 100%;
  display: block;
`;

export const Lifestyle: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <ImageGallery photos={photos} margin={10} />
      </ImageContainer>  
    </Container>
  )
};
