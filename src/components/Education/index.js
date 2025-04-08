import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const EducationContainer = styled.div`
  color: #fff;
  background: #0a192f;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const EducationWrapper = styled.div`
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

const EducationH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const EducationTimeline = styled.div`
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

const EducationItem = styled.div`
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

const EducationContent = styled.div`
  padding: 20px 30px;
  background-color: #112240;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const EducationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #01bf71;
`;

const EducationSchool = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ccd6f6;
`;

const EducationDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #8892b0;
`;

const EducationGrade = styled.div`
  font-size: 1rem;
  color: #a8b2d1;
  margin-bottom: 10px;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #01bf71;
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationWrapper>
        <EducationH1>Education</EducationH1>
        <EducationTimeline>
          <EducationItem position="left">
            <EducationContent>
              <EducationTitle>B.Tech in Computer Science Engineering</EducationTitle>
              <EducationSchool>
                <IconWrapper>
                  <FaGraduationCap />
                </IconWrapper>
                Govt. Model Engineering College, Kochi
              </EducationSchool>
              <EducationDate>
                <IconWrapper>
                  <FaCalendarAlt />
                </IconWrapper>
                2021 - 2025 (Expected)
              </EducationDate>
              <EducationGrade>CGPA: 8.2</EducationGrade>
            </EducationContent>
          </EducationItem>
          <EducationItem position="right">
            <EducationContent>
              <EducationTitle>Class XII (CBSE)</EducationTitle>
              <EducationSchool>
                <IconWrapper>
                  <FaGraduationCap />
                </IconWrapper>
                Bhavans Vidya Mandir, Elamakkara
              </EducationSchool>
              <EducationDate>
                <IconWrapper>
                  <FaCalendarAlt />
                </IconWrapper>
                2021
              </EducationDate>
              <EducationGrade>Percentage: 97%</EducationGrade>
            </EducationContent>
          </EducationItem>
          <EducationItem position="left">
            <EducationContent>
              <EducationTitle>Class X (CBSE)</EducationTitle>
              <EducationSchool>
                <IconWrapper>
                  <FaGraduationCap />
                </IconWrapper>
                Bhavans Vidya Mandir, Elamakkara
              </EducationSchool>
              <EducationDate>
                <IconWrapper>
                  <FaCalendarAlt />
                </IconWrapper>
                2019
              </EducationDate>
              <EducationGrade>Percentage: 93%</EducationGrade>
            </EducationContent>
          </EducationItem>
        </EducationTimeline>
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
