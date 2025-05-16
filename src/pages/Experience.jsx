import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  padding: 4rem 2rem 2rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
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

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

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

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TimelineItem = styled(motion.div)`
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
    margin-bottom: 2.5rem;

    &:nth-child(even) {
      padding-left: 60px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  width: calc(100% - 50px);
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(33, 150, 243, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
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
    width: 35px;
    height: 35px;

    svg {
      font-size: 1em;
    }
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  color: #81d4fa;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ItemSubtitle = styled.h5`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ItemDate = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const ItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
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

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    top: -8px;
    right: 15px;
  }
`;

// Define experiences data outside the component
const experiencesData = [
  {
    title: 'IEEE Computer Society',
    subtitle: 'Başkan',
    date: '2023 - 2025',
    description: 'Topluluk başkanı ve teknik ekip üyesi olarak görev aldım.',
    icon: <FaLaptopCode />,
    type: 'experience',
    order: 0
  },
  {
    title: 'MİSYA - ŞİRA Roket Takımı',
    subtitle: 'Sosyal Medya Sorumlusu',
    date: '2023 - 2024',
    description: 'MiSYA öğrenci topluluğu ve Şİ-RA Yüksek İrtifa Roket Takımında sosyal medya içerik yönetimi ve proje yönetimi.',
    icon: <FaRocket />,
    type: 'experience',
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
    title: 'Balıkesir Üniversitesi',
    subtitle: 'Bilgisayar Mühendisliği',
    date: '2023 - Devam ediyor',
    description: 'GPA: 3.08',
    icon: <FaGraduationCap />,
    type: 'education',
    order: 3
  },
  {
    title: 'Eskişehir Beylikova Fen Lisesi',
    subtitle: 'Lise Eğitimi',
    date: '2018 - 2022',
    description: '',
    icon: <FaGraduationCap />,
    type: 'education',
    order: 4
  }
];

const Experience = () => {
  const sortedExperiences = [...experiencesData].sort((a, b) => a.order - b.order);

  return (
    <ExperienceContainer>
      <Title>Deneyim & Eğitim</Title>
      <Timeline>
        {sortedExperiences.map((item, index) => (
          <TimelineItem
            key={index}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50,
              filter: "blur(4px)"
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              filter: "blur(0px)"
            }}
            viewport={{ 
              once: false,
              amount: 0.3,
              margin: "-50px"
            }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <TimelineDot
              as={motion.div}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + 0.2,
                ease: "backOut"
              }}
            >
              {item.icon}
            </TimelineDot>
            <TimelineContent
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ 
                once: false,
                amount: 0.3,
                margin: "-50px"
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <TypeBadge type={item.type}>
                {item.type === 'education' ? 'Eğitim' : 'Deneyim'}
              </TypeBadge>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDate>{item.date}</ItemDate>
              <ItemDescription>{item.description}</ItemDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience; 