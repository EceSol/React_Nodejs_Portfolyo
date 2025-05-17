import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaCode, FaAward, FaStar, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a192f 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(79, 195, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
    animation: pulse 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(2px 2px at 40px 60px, #4fc3f7, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 20px 50px, #81d4fa, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 30px 100px, #4fc3f7, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 60px, #81d4fa, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 110px 90px, #4fc3f7, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    opacity: 0.15;
    animation: twinkle 4s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }

  @keyframes twinkle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  color: #81d4fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding: 0.8rem 1.2rem;
  background: rgba(129, 212, 250, 0.1);
  border: 1px solid rgba(129, 212, 250, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 100;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(129, 212, 250, 0.15);
    transform: translateX(-5px);
    box-shadow: 0 0 20px rgba(129, 212, 250, 0.2);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
`;

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #fff;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const AvatarContainer = styled(motion.div)`
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #4fc3f7, #81d4fa);
    z-index: 0;
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, #81d4fa, #4fc3f7);
    z-index: 0;
    animation: rotate 4s linear infinite reverse;
    opacity: 0.5;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 4px solid #000;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled(motion.section)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #81d4fa;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(129, 212, 250, 0.2);

  svg {
    font-size: 1.3rem;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SchoolName = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Degree = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: #4fc3f7;
  font-size: 0.9rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h4`
  color: #4fc3f7;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "•";
    color: #4fc3f7;
  }
`;

const Interests = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Interest = styled(motion.span)`
  background: rgba(129, 212, 250, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #81d4fa;
  border: 1px solid rgba(129, 212, 250, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4fc3f7, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: #81d4fa;
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);

  &:hover {
    color: #4fc3f7;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
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

  const interests = [
    "Web Geliştirme",
    "Mobil Uygulama",
    "UI/UX Tasarım",
    "Yapay Zeka",
    "Siber Güvenlik"
  ];

  return (
    <PageWrapper>
      <BackButton to="/">
        <FaArrowLeft /> Ana Sayfaya Dön
      </BackButton>
      <ResumeContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header>
          <AvatarContainer variants={itemVariants}>
            <Avatar src="/avatar.jpg" alt="Ece Sol" />
          </AvatarContainer>
          <Name variants={itemVariants}>Ece Sol</Name>
          <Title variants={itemVariants}>Yazılım Geliştirici</Title>
          <ContactInfo variants={itemVariants}>
            <ContactItem href="mailto:cengecesol@gmail.com">
              <FaEnvelope /> cengecesol@gmail.com
            </ContactItem>
            <ContactItem href="https://github.com/EceSol" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </ContactItem>
            <ContactItem href="https://www.linkedin.com/in/ece-sol-09876829a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt /> Balıkesir, Türkiye
            </ContactItem>
          </ContactInfo>
        </Header>

        <ContentGrid>
          <Section variants={itemVariants}>
            <SectionTitle>
              <FaGraduationCap /> Eğitim
            </SectionTitle>
            <EducationItem>
              <SchoolName>Balıkesir Üniversitesi</SchoolName>
              <Degree>Bilgisayar Mühendisliği</Degree>
              <Period>2023 - Devam Ediyor</Period>
            </EducationItem>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>
              <FaStar /> İlgi Alanları
            </SectionTitle>
            <Interests>
              {interests.map((interest, index) => (
                <Interest
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaAward /> {interest}
                </Interest>
              ))}
            </Interests>
          </Section>

          <Section variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
            <SectionTitle>
              <FaCode /> Teknik Yetenekler
            </SectionTitle>
            <SkillsGrid>
              <SkillCategory>
                <CategoryTitle>Programlama Dilleri</CategoryTitle>
                <SkillsList>
                  <SkillItem>Python</SkillItem>
                  <SkillItem>Java</SkillItem>
                  <SkillItem>C#</SkillItem>
                  <SkillItem>JavaScript</SkillItem>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>Frontend Teknolojileri</CategoryTitle>
                <SkillsList>
                  <SkillItem>React.js</SkillItem>
                  <SkillItem>HTML5 & CSS3</SkillItem>
                  <SkillItem>Styled Components</SkillItem>
                  <SkillItem>Framer Motion</SkillItem>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>Mobil Geliştirme</CategoryTitle>
                <SkillsList>
                  <SkillItem>Flutter</SkillItem>
                  <SkillItem>Dart</SkillItem>
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>Araçlar & Platformlar</CategoryTitle>
                <SkillsList>
                  <SkillItem>Git & GitHub</SkillItem>
                  <SkillItem>VS Code</SkillItem>
                  <SkillItem>Android Studio</SkillItem>
                  <SkillItem>JetBrains</SkillItem>
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
          </Section>
        </ContentGrid>
      </ResumeContainer>
    </PageWrapper>
  );
};

export default Resume; 