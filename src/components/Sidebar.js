import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d253f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(9, 60px);
  }
`;

const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Experience
          </SidebarLink>
          <SidebarLink to="education" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Education
          </SidebarLink>
          <SidebarLink to="certifications" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Certifications
          </SidebarLink>
          <SidebarLink to="achievements" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Achievements
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/documents/resume.pdf" target="_blank">Resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
