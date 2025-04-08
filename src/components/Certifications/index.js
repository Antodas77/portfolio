import React from 'react';
import styled from 'styled-components';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationsContainer = styled.div`
  color: #fff;
  background: #010606;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const CertificationsWrapper = styled.div`
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

const CertificationsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const CertificationCard = styled.div`
  background: #112240;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const CertificationTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #01bf71;
`;

const CertificationIssuer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #ccd6f6;
`;

const CertificationDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #8892b0;
`;

const CertificationLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #01bf71;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 15px;
  padding: 8px 15px;
  border-radius: 4px;
  border: 1px solid #01bf71;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #01bf71;
    color: #fff;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #01bf71;
`;

const Certifications = () => {
  return (
    <CertificationsContainer id="certifications">
      <CertificationsWrapper>
        <CertificationsH1>Certifications</CertificationsH1>
        <CertificationsGrid>
          <CertificationCard>
            <CertificationTitle>ReactJS Certification</CertificationTitle>
            <CertificationIssuer>
              <IconWrapper>
                <FaCertificate />
              </IconWrapper>
              Nyeste Venture Technologies
            </CertificationIssuer>
            <CertificationDate>
              <IconWrapper>
                <FaCalendarAlt />
              </IconWrapper>
              June 2023
            </CertificationDate>
            <CertificationLink href="/documents/certifications/react-certification.pdf" target="_blank">
              <IconWrapper>
                <FaExternalLinkAlt />
              </IconWrapper>
              View Certificate
            </CertificationLink>
          </CertificationCard>

          <CertificationCard>
            <CertificationTitle>Web Designing Certification</CertificationTitle>
            <CertificationIssuer>
              <IconWrapper>
                <FaCertificate />
              </IconWrapper>
              Nyeste Venture Technologies
            </CertificationIssuer>
            <CertificationDate>
              <IconWrapper>
                <FaCalendarAlt />
              </IconWrapper>
              May 2023
            </CertificationDate>
            <CertificationLink href="/documents/certifications/web-design-certification.pdf" target="_blank">
              <IconWrapper>
                <FaExternalLinkAlt />
              </IconWrapper>
              View Certificate
            </CertificationLink>
          </CertificationCard>

          <CertificationCard>
            <CertificationTitle>Data Analysis and AI Course</CertificationTitle>
            <CertificationIssuer>
              <IconWrapper>
                <FaCertificate />
              </IconWrapper>
              Nyeste Venture Technologies
            </CertificationIssuer>
            <CertificationDate>
              <IconWrapper>
                <FaCalendarAlt />
              </IconWrapper>
              April 2023
            </CertificationDate>
            <CertificationLink href="/documents/certifications/ai-certification.pdf" target="_blank">
              <IconWrapper>
                <FaExternalLinkAlt />
              </IconWrapper>
              View Certificate
            </CertificationLink>
          </CertificationCard>
        </CertificationsGrid>
      </CertificationsWrapper>
    </CertificationsContainer>
  );
};

export default Certifications;
