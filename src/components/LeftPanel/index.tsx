import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/colors';

import { HorizontalLineSeparator } from 'components/LineSeparator';

import { largeMobileMQ, smallTabletMQ } from 'styles/breakpoints';
import resume from 'resume.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.accent};
  height: 100%;
  flex: 2;
  padding: 10px 20px 10px 20px;

  ${smallTabletMQ(`
    display: none;
    padding: 5px 20px;
    margin-bottom: 20px;
  `)}

  ${largeMobileMQ(`
    padding: 5px 10px;
  `)}
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: center;
  align-items: flex-start;
`;


const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-size: 45px;
  margin: 10px 0 0 0;
  width: 100%;

  ${smallTabletMQ(`
    font-size: 30px
  `)}
`;

const Subtitle = styled.h4`
  color: ${colors.darkestGrey};
  font-weight: lighter;
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 25px;
  width: 100%;

  ${smallTabletMQ(`
    font-size: 18px;
    margin: 15px 0 5px 0;
  `)}

  ${largeMobileMQ(`
    font-size: 18px;
  `)}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${smallTabletMQ(`
    padding-top: 0;
  `)}
`;

const SectionTitle = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const Text = styled.div`
  font-size: 15px;
  line-height: 20px;
`;

const SubtitleContainer = styled.div`
  width: 100%;
`;

const CardText = styled.div`
  color: ${colors.black};
  margin-bottom: 5px;
  font-size: 16px;
`;

const SubText = styled.p`
    color: ${colors.text};;
    font-size: 15px;
    margin-top: 0;
`;

export const LeftPanel: React.FC = () => {
  const resumeObj = JSON.parse(JSON.stringify(resume));
  return (
    <Container>
      <Title>Jeeya Mehta</Title>
      <Row>
        <Column>
          <SubtitleContainer>
            <Subtitle>Full Stack Developer</Subtitle>
          </SubtitleContainer>
        </Column>
      </Row>
      <Section>
        <SectionTitle>Summary</SectionTitle>
        <HorizontalLineSeparator />
        <Text>My goal is to become an experienced Full-Stack Web and Mobile App Developer. I began coding when I was 8, starting with block coding all the way to now developing Full-Stack Web apps. I am skilled in web design using JavaScript, Html and CSS and I am now developing Web Apps using React, Redux, TypeScript and Python. I am working in a Start-up company and participate in daily scrum stand-ups, code reviews, and project discussions. I am currently studying at the highschool SATEC @ WA Porter.</Text>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <HorizontalLineSeparator />
        {resumeObj["Skills"].map((skill: IGenericObject) => (
          <>
            <CardText>{skill.skill}</CardText>
            <SubText>{skill.text}</SubText>
          </>
        ))}
      </Section>
    </Container>
  )
};
