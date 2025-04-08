import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

const ContactContainer = styled.div`
  color: #fff;
  background: #010606;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const ContactWrapper = styled.div`
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

const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  background: #112240;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactIcon = styled.span`
  margin-right: 15px;
  font-size: 1.5rem;
  color: #01bf71;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
`;

const ContactLink = styled.a`
  color: #a8b2d1;
  text-decoration: none;
  
  &:hover {
    color: #01bf71;
  }
`;

const ContactMessage = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 1.1rem;
  color: #a8b2d1;
  line-height: 1.6;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactH1>Contact</ContactH1>
        <ContactRow>
          <ContactInfo>
            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <ContactLink href="mailto:antonyyesudas2003@gmail.com">
                  antonyyesudas2003@gmail.com
                </ContactLink>
              </ContactText>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <ContactLink href="tel:+919037514809">
                  +91 9037514809
                </ContactLink>
              </ContactText>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                Kochi, India
              </ContactText>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactIcon>
                <FaBirthdayCake />
              </ContactIcon>
              <ContactText>
                09 June 2003
              </ContactText>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactIcon>
                <FaLinkedin />
              </ContactIcon>
              <ContactText>
                <ContactLink href="https://www.linkedin.com/in/antony-yesudas-b34269252/" target="_blank">
                  https://www.linkedin.com/in/antony-yesudas-b34269252/
                </ContactLink>
              </ContactText>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactIcon>
                <FaGithub />
              </ContactIcon>
              <ContactText>
                <ContactLink href="https://github.com/Antodas77" target="_blank">
                  github.com/Antodas77
                </ContactLink>
              </ContactText>
            </ContactInfoItem>
            <ContactMessage>
              Feel free to reach out to me via email or phone for any inquiries or opportunities.
            </ContactMessage>
          </ContactInfo>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
