import * as React from 'react';
import styled from 'styled-components';

import { IIcon } from 'components/Icon/types';
import { smallTabletMQ } from 'styles/breakpoints';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  ${({ isRound }: { isRound?: boolean }) => (isRound && `border-radius: 50%`)};
  ${smallTabletMQ(`
    width: 20px;
    margin-top: -10px;
  `)}
`;

export const Icon: React.FC<IIcon> = ({ src, width = 30, link, isRound }) => {
  return (
    <IconContainer>
      <a href={link}>
        <Image src={src} width={width} isRound={isRound} />
      </a>
    </IconContainer>
  )
};