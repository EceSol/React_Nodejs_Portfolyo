import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaBrain } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2196F3;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, 
      rgba(33, 150, 243, 0.2),
      rgba(33, 150, 243, 0.5),
      rgba(33, 150, 243, 0.2)
    );

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: 4rem;

  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    padding-left: 60px;
    margin-bottom: 3rem;

    &:nth-child(even) {
      padding-left: 60px;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  width: calc(100% - 50px);
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(33, 150, 243, 0.1);
  transition: transform 0.3s ease;
  color: ${props => {
    const index = props.index || 0;
    const totalItems = props.totalItems || 1;
    // Create a gradient from lighter to darker text
    const opacity = 0.7 + (0.3 * (index / totalItems));
    return `rgba(255, 255, 255, ${opacity})`;
  }};

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #1976D2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  left: calc(50% - 20px);
  top: 20px;
  box-shadow: 0 0 20px rgba(25, 118, 210, 0.3);
  z-index: 2;

  svg {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  color: ${props => {
    const index = props.index || 0;
    const totalItems = props.totalItems || 1;
    // Create a gradient from lighter to darker blue
    const blueStart = [135, 206, 250]; // Light blue
    const blueEnd = [25, 118, 210];   // Dark blue
    const r = Math.round(blueStart[0] + (blueEnd[0] - blueStart[0]) * (index / totalItems));
    const g = Math.round(blueStart[1] + (blueEnd[1] - blueStart[1]) * (index / totalItems));
    const b = Math.round(blueStart[2] + (blueEnd[2] - blueStart[2]) * (index / totalItems));
    return `rgb(${r}, ${g}, ${b})`;
  }};
  margin-bottom: 0.5rem;
`;

const ItemSubtitle = styled.h5`
  font-size: 1rem;
  color: ${props => {
    const index = props.index || 0;
    const totalItems = props.totalItems || 1;
    const opacity = 0.95 - (0.15 * (index / totalItems));
    return `rgba(255, 255, 255, ${opacity})`;
  }};
  margin-bottom: 0.5rem;
`;

const ItemDate = styled.span`
  font-size: 0.9rem;
  color: ${props => {
    const index = props.index || 0;
    const totalItems = props.totalItems || 1;
    const opacity = 0.8 - (0.2 * (index / totalItems));
    return `rgba(255, 255, 255, ${opacity})`;
  }};
  display: block;
  margin-bottom: 1rem;
`;

const ItemDescription = styled.p`
  color: ${props => {
    const index = props.index || 0;
    const totalItems = props.totalItems || 1;
    const opacity = 0.9 - (0.1 * (index / totalItems));
    return `rgba(255, 255, 255, ${opacity})`;
  }};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TypeBadge = styled.span`
  position: absolute;
  top: -10px;
  right: 20px;
  background: ${props => props.type === 'education' ? '#1976D2' : '#2196F3'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

// Define experiences data outside the component
const experiencesData = [
  {
    title: 'Eskişehir Beylikova Fen Lisesi',
    subtitle: 'Lise Eğitimi',
    date: '2018 - 2022',
    description: '',
    icon: <FaGraduationCap />,
    type: 'education',
    order: 0
  },
  {
    title: 'Balıkesir Üniversitesi',
    subtitle: 'Bilgisayar Mühendisliği',
    date: '2023 - Devam ediyor',
    description: 'GPA: 3.08',
    icon: <FaGraduationCap />,
    type: 'education',
    order: 1
  },
  {
    title: 'BAUN Yapay Zeka Takımı',
    subtitle: 'Aktif Üye',
    date: '2023 - 2024',
    description: 'Yapay zeka projeleri geliştirme ve araştırma çalışmaları.',
    icon: <FaBrain />,
    type: 'experience',
    order: 2
  },
  {
    title: 'MISYA - SI-RA Roket Takımı',
    subtitle: 'Sosyal Medya Sorumlusu',
    date: '2023 - 2024',
    description: 'MiSYA öğrenci topluluğu ve Şİ-RA Yüksek İrtifa Roket Takımında sosyal medya içerik yönetimi ve proje yönetimi.',
    icon: <FaRocket />,
    type: 'experience',
    order: 3
  },
  {
    title: 'IEEE Computer Society',
    subtitle: 'Başkan',
    date: '2023 - 2025',
    description: 'Topluluk başkanı ve teknik ekip üyesi olarak görev aldım.',
    icon: <FaLaptopCode />,
    type: 'experience',
    order: 4
  }
];

const Experience = () => {
  const sortedExperiences = [...experiencesData].sort((a, b) => {
    const aYear = parseInt(a.date.split(' - ')[0]);
    const bYear = parseInt(b.date.split(' - ')[0]);
    if (aYear === bYear) {
      // If same year, sort by type (education first)
      if (a.type === 'education' && b.type !== 'education') return -1;
      if (a.type !== 'education' && b.type === 'education') return 1;
      // For experiences in the same year, use predefined order
      return a.order - b.order;
    }
    return aYear - bYear;
  });

  const totalItems = sortedExperiences.length;

  return (
    <ExperienceContainer>
      <Title>Deneyim & Eğitim</Title>
      <Timeline>
        {sortedExperiences.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineDot>{item.icon}</TimelineDot>
            <TimelineContent index={index} totalItems={totalItems}>
              <TypeBadge type={item.type}>
                {item.type === 'education' ? 'Eğitim' : 'Deneyim'}
              </TypeBadge>
              <ItemTitle index={index} totalItems={totalItems}>{item.title}</ItemTitle>
              <ItemSubtitle index={index} totalItems={totalItems}>{item.subtitle}</ItemSubtitle>
              <ItemDate index={index} totalItems={totalItems}>{item.date}</ItemDate>
              <ItemDescription index={index} totalItems={totalItems}>{item.description}</ItemDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience; 