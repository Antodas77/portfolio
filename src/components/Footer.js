import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0a192f;
  color: #fff;
  padding: 48px 24px;
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(ScrollLink)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
              Antony Yesudas
            </SocialLogo>
            <WebsiteRights>
              Antony Yesudas &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.linkedin.com/in/antony-yesudas-b34269252/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Antodas77" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="mailto:antonyyesudask.mec@gmail.com" target="_blank" aria-label="Email">
                <FaEnvelope />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
