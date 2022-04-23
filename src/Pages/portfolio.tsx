import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

import { largeMobileMQ } from 'styles/breakpoints';

const Title = styled.h4`
  color: ${colors.darkGrey};
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

const Column = styled.div`
  flex: 5;
  flex-direction: row;
`;

export const Portfolio: React.FC = () => {
  return (
    <div>
        <Title>Portfolio</Title>
    </div>
  )
};
