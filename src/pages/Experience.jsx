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
      subtitle: 'Yazılım Mühendisliği',
      date: '2020 - Devam Ediyor',
      description: 'Yazılım mühendisliği alanında eğitimime devam ediyorum. Özellikle web teknolojileri ve Python programlama konularında uzmanlaşmaya çalışıyorum.'
    },
    {
      title: 'Topluluk Katılımı',
      subtitle: 'GitHub Projeleri',
      date: '2023 - Devam Ediyor',
      description: 'Açık kaynak projelere katkıda bulunuyor ve kendi projelerimi GitHub üzerinde paylaşıyorum. Python ve PyQt5 ile geliştirdiğim uygulamalar başta olmak üzere çeşitli projeler üzerinde çalışıyorum.'
    },
    {
      title: 'Kişisel Gelişim',
      subtitle: 'Web Geliştirme',
      date: '2023 - Devam Ediyor',
      description: 'React ve Node.js teknolojilerini öğrenerek modern web uygulamaları geliştirme konusunda kendimi geliştiriyorum. Kullanıcı deneyimi ve arayüz tasarımı konularında da bilgi sahibiyim.'
    }
  ];

  return (
    <ExperienceContainer>
      <Title>Deneyim</Title>
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