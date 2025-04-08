import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaLinux, FaCode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiExpress, SiCplusplus, SiMysql, SiPostgresql } from 'react-icons/si';

const SkillsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 80px 0;
  }
`;

const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillsCard = styled.div`
  background: #1a1a2e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  margin-bottom: 40px;
  width: 100%;
`;

const SkillsH2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #01bf71;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #01bf71;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #112240;
  padding: 20px 15px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #01bf71;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #ccd6f6;
  font-weight: 500;
`;

const SoftSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const SoftSkillTag = styled.div`
  background: #112240;
  color: #ccd6f6;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 16px;
  border: 1px solid #01bf71;
  transition: all 0.3s ease;
  
  &:hover {
    background: #01bf71;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsH2>Technical Skills</SkillsH2>
          <SkillsGrid>
            <SkillItem>
              <SkillIcon>
                <FaPython />
              </SkillIcon>
              <SkillName>Python</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiCplusplus />
              </SkillIcon>
              <SkillName>C++</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaHtml5 />
              </SkillIcon>
              <SkillName>HTML</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCss3Alt />
              </SkillIcon>
              <SkillName>CSS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaJs />
              </SkillIcon>
              <SkillName>JavaScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaReact />
              </SkillIcon>
              <SkillName>React</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaNodeJs />
              </SkillIcon>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiExpress />
              </SkillIcon>
              <SkillName>Express.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiMysql />
              </SkillIcon>
              <SkillName>SQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <SiPostgresql />
              </SkillIcon>
              <SkillName>PostgreSQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaGit />
              </SkillIcon>
              <SkillName>Git</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaDocker />
              </SkillIcon>
              <SkillName>Docker</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaLinux />
              </SkillIcon>
              <SkillName>Linux</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>VS Code</SkillName>
            </SkillItem>
          </SkillsGrid>
        </SkillsCard>

        <SkillsCard>
          <SkillsH2>Soft Skills</SkillsH2>
          <SoftSkillsContainer>
            <SoftSkillTag>Communication</SoftSkillTag>
            <SoftSkillTag>Critical Thinking</SoftSkillTag>
            <SoftSkillTag>Team Collaboration</SoftSkillTag>
            <SoftSkillTag>Leadership</SoftSkillTag>
            <SoftSkillTag>Time Management</SoftSkillTag>
          </SoftSkillsContainer>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
