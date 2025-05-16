import React from 'react';
import styled from 'styled-components';
import { DiPython, DiJava, DiReact } from 'react-icons/di';
import { SiFlutter, SiCsharp } from 'react-icons/si';
import { FaUserGraduate, FaCode, FaLaptopCode } from 'react-icons/fa';
import AnimatedSkills from '../components/AnimatedSkills';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 4rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 0 1rem;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 0;
    scroll-margin-top: 60px;
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

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const AboutCard = styled(motion.div)`
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

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 15px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  svg {
    font-size: 3.5rem;
    color: #b3e5fc;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    
    svg {
      transform: scale(1.1) rotate(5deg);
      color: #81d4fa;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    
    svg {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;

    svg {
      font-size: 2.8rem;
    }
  }
`;

const SkillName = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  margin: 0.5rem 0;
  transition: color 0.3s ease;

  ${SkillCard}:hover & {
    color: #81d4fa;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
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
    width: ${props => props.progress || 0}%;
    background: linear-gradient(to right, #81d4fa, #b3e5fc);
    transition: width 0.8s ease;
  }

  @media (max-width: 480px) {
    height: 3px;
    margin-top: 0.8rem;
  }
`;

const About = () => {
  const skills = [
    {
      name: 'Python',
      icon: <DiPython />,
      level: 85
    },
    {
      name: 'Java',
      icon: <DiJava />,
      level: 75
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
      level: 70
    },
    {
      name: 'C#',
      icon: <SiCsharp />,
      level: 60
    },
    {
      name: 'React',
      icon: <DiReact />,
      level: 70
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutContainer>
      <Section>
        <Title
          as={motion.h2}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Ben Kimim?
        </Title>
        <AboutGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            {
              icon: <FaLaptopCode />,
              title: "Geliştirme",
              text: "Yazılım geliştirme ve teknolojiye olan tutkumla, modern ve kullanıcı dostu uygulamalar geliştiriyorum."
            },
            {
              icon: <FaCode />,
              title: "Uzmanlık",
              text: "Algoritmalar ve programlama konusunda güçlü bir temele sahibim. C#, Java, Flutter ve Python dillerinde deneyimliyim."
            },
            {
              icon: <FaUserGraduate />,
              title: "Eğitim",
              text: "Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum."
            }
          ].map((card, index) => (
            <AboutCard
              key={index}
              variants={cardVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CardTitle>
                {card.icon}
                {card.title}
              </CardTitle>
              <CardText>
                {card.text}
              </CardText>
            </AboutCard>
          ))}
        </AboutGrid>
      </Section>

      <Section id="skills">
        <Title
          as={motion.h2}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Yeteneklerim
        </Title>
        <AnimatedSkills />
        <SkillsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {skill.icon}
              <SkillName>{skill.name}</SkillName>
              <SkillLevel progress={skill.level} />
            </SkillCard>
          ))}
        </SkillsContainer>
      </Section>
    </AboutContainer>
  );
};

export default About; 