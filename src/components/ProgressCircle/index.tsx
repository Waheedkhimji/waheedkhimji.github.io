import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';
const INITIAL_OFFSET = 25;

const circleConfig = {
  viewBox: '0 0 40 40',
  x: '20',
  y: '20',
  radio: '15.91549430918954'
};

const CircleProgressBar = styled.div`
  .circle-label {
    transform: translateY(0.25em);
  }

  .circle-percentage {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 20px;
`;

const Figure = styled.figure`
  display: flex;
`;

const Svg = styled.svg`
  min-width: 120px;
`;

const Text = styled.h2`
  font-size: 18px;
  flex: 1;
  text-align: center;
  margin-top: 0;
`;
export const ProgressCircle: React.FC<IProgressCircle> = ({ percentage, text }) => {
  return (
    <CircleProgressBar>
      <Figure>
        <Svg viewBox={circleConfig.viewBox}>
          <circle
            className="ring"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke={colors.lightGrey}
          />

          <circle
            className="path"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke={colors.grey}
            strokeDasharray={`${percentage} ${100 - percentage}`}
            strokeDashoffset={INITIAL_OFFSET}
          />
          <g className="circle-label">
            <text x="50%" y="50%" className="circle-percentage">
              {percentage}%
                </text>
          </g>
        </Svg>
      </Figure>
      <Text>{text}</Text>
    </CircleProgressBar>
  );
};