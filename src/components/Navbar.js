import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ $scrollNav }) => ($scrollNav ? '#0a192f' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  box-shadow: ${({ $scrollNav }) => ($scrollNav ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none')};

  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  color: #01bf71;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #01bf71;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  margin: 0 5px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
  }

  &.active {
    color: #01bf71;
  }

  &.active:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 8px rgba(1, 191, 113, 0.3);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(1, 191, 113, 0.4);
  }
`;

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <>
      <Nav $scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Antony Yesudas
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="education" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Education
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="certifications" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Certifications
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="achievements" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Achievements
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="/documents/resume.pdf" target="_blank">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
