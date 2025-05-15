import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #4fc3f7;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Skill = styled.div`
  background: rgba(79, 195, 247, 0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  color: #4fc3f7;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(79, 195, 247, 0.2);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  
  a {
    color: #4fc3f7;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const About = () => {
  const skills = [
    'C# Temel',
    'Java Temel',
    'Python',
    'Flutter',
    'PHP',
    'Proje Yönetimi',
    'Analitik Düşünme',
    'Problem Çözme',
    'Takım Çalışması',
    'İletişim'
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
        <Text>
          Proje yönetimi ve takım çalışmasında tecrübeli, teknolojiye meraklı ve kendini sürekli geliştiren biriyim.
          Yazılım dünyasında kendimi geliştirerek mühendislik kariyerime sağlam adımlarla başlamak hedefim.
        </Text>
        <ContactInfo>
          <Text>
            E-mail: <a href="mailto:cengeceesol@gmail.com">cengeceesol@gmail.com</a>
          </Text>
        </ContactInfo>
      </Section>

      <Section>
        <Title>Yeteneklerim</Title>
        <Text>
          Teknoloji dünyasının sürekli değişen yapısına ayak uydurmak için
          kendimi sürekli geliştiriyorum. İşte bazı teknik yeteneklerim:
        </Text>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsGrid>
      </Section>
    </AboutContainer>
  );
};

export default About; 