import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

import { largeMobileMQ } from 'styles/breakpoints';
import { photos } from 'Galleries/LandscapeGallery';
import Gallery from 'react-photo-gallery';

const Title = styled.h4`
  color: ${colors.white};
  margin: 15px 0 5px 0;
`;

const Subtitle = styled.h5`
  color: ${colors.grey};
  margin: 3px 0;
`;

const WorkExperienceContainer = styled.div`
  display: flex;
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

export const Landscape: React.FC = () => {
  return (
    <ImageContainer>
      <ImageGallery photos={photos} margin={10} />;
    </ImageContainer>
  )
};
