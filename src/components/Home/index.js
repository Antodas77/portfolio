import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const HomeContainer = styled.div`
  background: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #0a192f 0%,
    #112240 100%
  );
`;

const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HomeH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;
  margin-bottom: 12px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 4px;
    background: #01bf71;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HomeTagline = styled.p`
  color: #01bf71;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  margin-bottom: 35px;
  margin-top: 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HomeP = styled.p`
  margin-top: 24px;
  color: #ccd6f6;
  font-size: 20px;
  text-align: left;
  max-width: 600px;
  margin-bottom: 35px;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const HomeBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#112240')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const ButtonIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 3px solid #01bf71;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    border-color: #fff;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeBg />
      <HomeContent>
        <ProfileImg src="/profile.png" alt="Antony Yesudas" />
        <HomeH1>Antony Yesudas</HomeH1>
        <HomeTagline>Full-Stack Developer | Web Development & AI Enthusiast</HomeTagline>
        <HomeP>
          I'm a final-year Computer Science student at Govt. Model Engineering College, Kochi. 
          With experience in modern web technologies, I specialize in building efficient and 
          scalable full-stack applications.
        </HomeP>
        <HomeBtnWrapper>
          <Button 
            href="/documents/resume.pdf"
            target="_blank"
            primary="true"
            dark="true"
          >
            <ButtonIcon><FaFilePdf /></ButtonIcon> View Resume
          </Button>
          <Button 
            href="https://www.linkedin.com/in/antony-yesudas-b34269252/"
            target="_blank"
          >
            <ButtonIcon><FaLinkedin /></ButtonIcon> LinkedIn
          </Button>
          <Button 
            href="https://github.com/Antodas77"
            target="_blank"
          >
            <ButtonIcon><FaGithub /></ButtonIcon> GitHub
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
