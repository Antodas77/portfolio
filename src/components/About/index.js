import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  color: #fff;
  background: #010606;
  padding: 120px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;
  justify-content: center;
`;

const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  grid-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.6;
  color: #ccd6f6;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(1, 191, 113, 0.3);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(1, 191, 113, 0.4);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  color: #01bf71;
  margin-bottom: 8px;
`;

const InfoContent = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Heading>About Me</Heading>
        <AboutRow>
          <Column1>
            <TextWrapper>
              <TopLine>Background</TopLine>
              <Subtitle>
                I'm passionate about creating clean, user-focused digital experiences. 
                My strengths lie in problem solving, adapting quickly, and collaborating 
                in team environments.
              </Subtitle>
              <BtnWrap>
                <Button href="/documents/resume.pdf" target="_blank">Download Resume</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <InfoContainer>
              <InfoItem>
                <InfoTitle>Technical Focus</InfoTitle>
                <InfoContent>
                  Full-Stack Web Development, Mobile App Development, UI/UX Design
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Education</InfoTitle>
                <InfoContent>
                  B.Tech Computer Science Engineering<br />
                  Govt. Model Engineering College, Kochi (Expected 2025)<br />
                  CGPA: 8.2
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>Academic Background</InfoTitle>
                <InfoContent>
                  Class XII (CBSE), 2021 – 97%<br />
                  Bhavans Vidya Mandir, Elamakkara<br /><br />
                  Class X (CBSE), 2019 – 93%<br />
                  Bhavans Vidya Mandir, Elamakkara
                </InfoContent>
              </InfoItem>
            </InfoContainer>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
