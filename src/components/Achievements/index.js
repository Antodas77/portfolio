import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaFootballBall, FaBasketballBall, FaTableTennis } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';

const AchievementsContainer = styled.div`
  color: #fff;
  background: #0a192f;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AchievementsWrapper = styled.div`
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

const AchievementsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const AchievementsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementsColumn = styled.div`
  background: #112240;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const AchievementsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #01bf71;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #01bf71;
`;

const AchievementsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 15px;
  color: #a8b2d1;
  font-size: 1rem;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #01bf71;
  }
`;

const SportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SportItem = styled.div`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  font-size: 1rem;
`;

const SportIcon = styled.span`
  margin-right: 10px;
  font-size: 1.5rem;
  color: #01bf71;
`;

const Achievements = () => {
  return (
    <AchievementsContainer id="achievements">
      <AchievementsWrapper>
        <AchievementsH1>Achievements & Activities</AchievementsH1>
        <AchievementsRow>
          <AchievementsColumn>
            <AchievementsTitle>
              <IconWrapper>
                <FaTrophy />
              </IconWrapper>
              Achievements
            </AchievementsTitle>
            <AchievementsList>
              <AchievementItem>
                Participated in Tech Streak 2022 (Excel 2021)
              </AchievementItem>
              <AchievementItem>
                Won 2nd prize in College Hackathon 2023
              </AchievementItem>
              <AchievementItem>
                Active member of College Tech Club
              </AchievementItem>
              <AchievementItem>
                Volunteer at College Technical Festival
              </AchievementItem>
            </AchievementsList>
          </AchievementsColumn>

          <AchievementsColumn>
            <AchievementsTitle>
              <IconWrapper>
                <FaFootballBall />
              </IconWrapper>
              Sports Interests
            </AchievementsTitle>
            <SportsGrid>
              <SportItem>
                <SportIcon>
                  <FaFootballBall />
                </SportIcon>
                Football
              </SportItem>
              <SportItem>
                <SportIcon>
                  <GiCricketBat />
                </SportIcon>
                Cricket
              </SportItem>
              <SportItem>
                <SportIcon>
                  <FaBasketballBall />
                </SportIcon>
                Basketball
              </SportItem>
              <SportItem>
                <SportIcon>
                  <FaTableTennis />
                </SportIcon>
                Badminton
              </SportItem>
            </SportsGrid>
          </AchievementsColumn>
        </AchievementsRow>
      </AchievementsWrapper>
    </AchievementsContainer>
  );
};

export default Achievements;
