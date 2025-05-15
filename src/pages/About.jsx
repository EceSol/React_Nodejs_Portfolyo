import React from 'react';
import styled from 'styled-components';
import { DiPython, DiJava, DiReact } from 'react-icons/di';
import { SiFlutter, SiCsharp } from 'react-icons/si';
import AnimatedSkills from '../components/AnimatedSkills';

const AboutContainer = styled.div`
  padding: 2rem 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #81d4fa;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
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

    ${props => props.progress && `
      &:after {
        width: ${props.progress}%;
      }
    `}
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #b3e5fc;
    transition: all 0.3s ease;
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

const ContactInfo = styled.div`
  margin-top: 2rem;
  
  a {
    color: #81d4fa;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
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
        <Text>
          Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Yazılım geliştirme ve teknolojiye olan ilgimle
          birlikte öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Algoritmalar ve programlama konusunda
          güçlü bir temele sahibim. C#, Java, Flutter ve Python dillerinde deneyimim var.
        </Text>
        <ContactInfo>
          <Text>
            E-mail: <a href="mailto:ecegeceesol@gmail.com">ecegeceesol@gmail.com</a>
          </Text>
          <Text>
            Telefon: 05316063053
          </Text>
        </ContactInfo>
      </Section>

      <Section>
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