import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  padding: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #4fc3f7;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: rgba(79, 195, 247, 0.3);
  }
`;

const TimelineItem = styled.div`
  margin-left: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 1.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #4fc3f7;
    border: 2px solid #000;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  color: #4fc3f7;
  margin-bottom: 0.5rem;
`;

const ItemSubtitle = styled.h4`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const ItemDate = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
  display: block;
`;

const ItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Eğitim',
      subtitle: 'Balıkesir Üniversitesi - Bilgisayar Mühendisliği',
      date: '2023 - Devam ediyor',
      description: 'GPA: 3.1'
    },
    {
      title: 'Lise Eğitimi',
      subtitle: 'Eskişehir Beylikova Fen Lisesi',
      date: '2018-2022',
      description: ''
    },
    {
      title: 'Topluluk Üyelikleri',
      subtitle: 'Computer Society & MISYA & SI-RA',
      date: '2023-2024',
      description: 'Computer Society Başkanı ve Teknik Ekip Üyesi olarak görev alıyorum. MISYA öğrenci topluluğunda aktif üyeyim. SI-RA Yüksek İrfa Roket Takımı Sosyal Medya Sorumlusu olarak çalışıyorum.'
    },
    {
      title: 'Diğer Üyelikler',
      subtitle: 'BAUN Yapay Zeka Takımı & AFAD',
      date: '2023-2024',
      description: 'BAUN Yapay Zeka Takımı ve AFAD üyesiyim.'
    }
  ];

  return (
    <ExperienceContainer>
      <Title>Deneyim & Eğitim</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <ItemTitle>{exp.title}</ItemTitle>
            <ItemSubtitle>{exp.subtitle}</ItemSubtitle>
            <ItemDate>{exp.date}</ItemDate>
            <ItemDescription>{exp.description}</ItemDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience; 