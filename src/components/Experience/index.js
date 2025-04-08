import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  color: #fff;
  background: #0a192f;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const ExperienceWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const ExperienceH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ExperienceTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #01bf71;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    @media screen and (max-width: 768px) {
      left: 31px;
    }
  }
`;

const ExperienceItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: ${({ position }) => (position === 'left' ? '0' : '50%')};

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${({ position }) => (position === 'left' ? '-17px' : 'auto')};
    left: ${({ position }) => (position === 'left' ? 'auto' : '-17px')};
    background-color: #01bf71;
    border: 4px solid #01bf71;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &::after {
      left: 15px;
      right: auto;
    }
  }
`;

const ExperienceContent = styled.div`
  padding: 20px 30px;
  background-color: #112240;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const ExperienceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #01bf71;
`;

const ExperienceCompany = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ccd6f6;
`;

const ExperienceDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #8892b0;
`;

const ExperienceLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: #8892b0;
`;

const ExperienceDescription = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExperiencePoint = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: #a8b2d1;
  font-size: 0.9rem;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #01bf71;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #01bf71;
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceWrapper>
        <ExperienceH1>Experience</ExperienceH1>
        <ExperienceTimeline>
          <ExperienceItem position="left">
            <ExperienceContent>
              <ExperienceTitle>ReactJS Intern</ExperienceTitle>
              <ExperienceCompany>
                <IconWrapper>
                  <FaBriefcase />
                </IconWrapper>
                Nyeste Venture Technologies Pvt Ltd
              </ExperienceCompany>
              <ExperienceDate>
                <IconWrapper>
                  <FaCalendarAlt />
                </IconWrapper>
                Apr 2023 – Jun 2023
              </ExperienceDate>
              <ExperienceLocation>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                Cochin
              </ExperienceLocation>
              <ExperienceDescription>
                <ExperiencePoint>
                  Developed modular, reusable components using ReactJS
                </ExperiencePoint>
                <ExperiencePoint>
                  Implemented frontend-backend integration using REST APIs
                </ExperiencePoint>
                <ExperiencePoint>
                  Utilized SQL databases for data storage and retrieval
                </ExperiencePoint>
                <ExperiencePoint>
                  Improved code quality through version control and team collaboration
                </ExperiencePoint>
              </ExperienceDescription>
            </ExperienceContent>
          </ExperienceItem>
        </ExperienceTimeline>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
