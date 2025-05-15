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

const About = () => {
  const skills = [
    'Python',
    'PyQt5',
    'Web Development',
    'React',
    'Node.js',
    'Git',
    'Problem Solving',
    'UI/UX Design'
  ];

  return (
    <AboutContainer>
      <Section>
        <Title>Ben Kimim?</Title>
        <Text>
          Yazılım geliştirme dünyasında kendini sürekli geliştirmeye odaklanan
          bir geliştiriciyim. Python ve web teknolojileri konusunda özel bir
          ilgim var ve bu alanlarda projeler geliştiriyorum.
        </Text>
        <Text>
          Özellikle PyQt5 kullanarak masaüstü uygulamaları geliştirme konusunda
          deneyim sahibiyim. Aynı zamanda web teknolojilerine olan ilgim
          nedeniyle React ve Node.js gibi modern teknolojileri öğrenmeye ve
          kullanmaya devam ediyorum.
        </Text>
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