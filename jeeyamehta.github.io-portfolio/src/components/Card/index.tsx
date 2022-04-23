import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { ICard } from 'components/Card/types';
import { HorizontalLineSeparator } from 'components/LineSeparator';

import { smallTabletMQ, largeMobileMQ } from 'styles/breakpoints';

export const FrostedGlassCard = styled.div`
  background-color: ${colors.white};
  backdrop-filter: blur(5px);
  border-radius: 5px;
  padding: 15px 50px;
  flex: 1;
  box-shadow: 0 3px 15px rgba( 121, 133, 158, 0.25);

  ${smallTabletMQ(`
   padding: 10px 20px;
  `)}
`;

const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 100px;
  flex-direction: row;

  ${smallTabletMQ(`
    padding: 5px 20px;
  `)}

  ${largeMobileMQ(`
    padding: 5px 10px;
  `)}
`;

const CardText = styled.div`
  color: ${colors.text};
  margin-bottom: 10px;
  font-size: 16px;

  p {
    margin: 0;
  }
`;

const Title = styled.p`
  color: ${colors.darkestGrey};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;
`;

export const Card: React.FC<ICard> = ({ text, title }) => {
  return (
    <CardContainer>
      <FrostedGlassCard>
        {title && (
          <Title>
            {title}
            <HorizontalLineSeparator />
          </Title>
        )}
        <CardText>{text}</CardText>
      </FrostedGlassCard>
    </CardContainer>
  )
};
