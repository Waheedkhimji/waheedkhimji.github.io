import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const Title = styled.h2`
  color: ${colors.lightGrey};
  margin: 25px 0 5px 0;
  text-align: center;
`;

const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 5;
  flex-direction: row;
`;

export const Prints: React.FC = () => {
  return (
    <WorkExperienceContainer>
      <Column>
        <Title>Prints Coming Soon!</Title>
      </Column>
    </WorkExperienceContainer>
  )
};
