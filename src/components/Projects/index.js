import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

const ProjectsWrapper = styled.div`
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

const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ProjectCard = styled.div`
  background: #112240;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ProjectH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

const ProjectInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProjectTech = styled.p`
  font-size: 1rem;
  color: #01bf71;
  font-weight: bold;
`;

const ProjectDuration = styled.p`
  font-size: 1rem;
  color: #888;
`;

const ProjectRole = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #a8b2d1;
  margin-bottom: 20px;
  width: 100%;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #01bf71;
  font-size: 1rem;
  text-decoration: none;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 4px;
  border: 1px solid #01bf71;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #01bf71;
    color: #fff;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectH2>Elderly Health Monitoring and Emergency Response System</ProjectH2>
          <ProjectInfo>
            <ProjectTech>Flutter, Express.js</ProjectTech>
            <ProjectDuration>3 Months</ProjectDuration>
          </ProjectInfo>
          <ProjectRole>Backend Developer</ProjectRole>
          <ProjectDescription>
            Worked as a backend developer in a 4-member team to create a comprehensive health monitoring
            system for elderly care. Implemented real-time health data monitoring and designed emergency
            alert functionality to enhance elderly safety.
          </ProjectDescription>
          <ProjectLinks>
            <ProjectLink href="https://github.com/Antodas77/sigmacare-backend" target="_blank">
              <FaGithub /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
        </ProjectCard>

        <ProjectCard>
          <ProjectH2>Craft Your Niche</ProjectH2>
          <ProjectInfo>
            <ProjectTech>React, Node.js, Express.js</ProjectTech>
            <ProjectDuration>2 Months</ProjectDuration>
          </ProjectInfo>
          <ProjectRole>Frontend Developer</ProjectRole>
          <ProjectDescription>
            Developed the frontend for a platform supporting handicraft sales. Focused on creating
            a responsive UI with smooth user interactions and seamless backend integration. Implemented
            features for product listing, user authentication, and shopping cart functionality.
          </ProjectDescription>
          <ProjectLinks>
            <ProjectLink href="https://github.com/Antodas77/CraftYourNiche" target="_blank">
              <FaGithub /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
