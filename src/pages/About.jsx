import React from 'react';
import styled from 'styled-components';
import { DiPython, DiJava, DiReact } from 'react-icons/di';
import { SiFlutter, SiCsharp } from 'react-icons/si';
import { FaUserGraduate, FaCode, FaLaptopCode } from 'react-icons/fa';
import AnimatedSkills from '../components/AnimatedSkills';

const AboutContainer = styled.div`
  padding: 4rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #81d4fa;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #81d4fa, #1976d2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const AboutCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(129, 212, 250, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  color: #81d4fa;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CardText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      225deg,
      rgba(129, 212, 250, 0.1) 0%,
      rgba(25, 118, 210, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    
    &:before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1) rotate(5deg);
      color: #81d4fa;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(to right, #81d4fa, #b3e5fc);
    transition: width 0.8s ease;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
`;

const About = () => {
  const skills = [
    {
      name: 'Python',
      icon: <DiPython />,
      level: 85,
      description: 'Web scraping, veri analizi'
    },
    {
      name: 'Java',
      icon: <DiJava />,
      level: 75,
      description: 'Temel programlama, OOP'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
      level: 70,
      description: 'Mobil uygulama geliştirme'
    },
    {
      name: 'C#',
      icon: <SiCsharp />,
      level: 60,
      description: 'Masaüstü uygulamalar'
    },
    {
      name: 'React',
      icon: <DiReact />,
      level: 70,
      description: 'Web frontend geliştirme'
    }
  ];

  return (
    <AboutContainer>
      <Section>
        <Title>Ben Kimim?</Title>
        <AboutGrid>
          <AboutCard>
            <CardTitle>
              <FaLaptopCode />
              Geliştirme
            </CardTitle>
            <CardText>
              Yazılım geliştirme ve teknolojiye olan tutkumla, modern ve kullanıcı dostu uygulamalar geliştiriyorum.
            </CardText>
          </AboutCard>

          <AboutCard>
            <CardTitle>
              <FaCode />
              Uzmanlık
            </CardTitle>
            <CardText>
              Algoritmalar ve programlama konusunda güçlü bir temele sahibim. C#, Java, Flutter ve Python dillerinde deneyimliyim.
            </CardText>
          </AboutCard>

          <AboutCard>
            <CardTitle>
              <FaUserGraduate />
              Eğitim
            </CardTitle>
            <CardText>
              Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
            </CardText>
          </AboutCard>
        </AboutGrid>
      </Section>

      <Section id="skills">
        <Title>Yeteneklerim</Title>
        <AnimatedSkills />
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index} progress={skill.level}>
              {skill.icon}
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
              <SkillLevel />
            </SkillCard>
          ))}
        </SkillsContainer>
      </Section>
    </AboutContainer>
  );
};

export default About; 