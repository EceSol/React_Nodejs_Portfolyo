import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #4fc3f7;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #4fc3f7;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  background: rgba(79, 195, 247, 0.1);
  color: #4fc3f7;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const DateRange = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Yemek Tarif Asistanı',
      description: 'Fromscrape ve Backend. Proje: Python dilini web kazıma amacıyla bu projede eliçizdeki malzemeleri girdiğiniz size yemek tarifi sunması. İsterseniz yemek türünü, mutfak türünü, alerjen olduğunuz bilgilerinizi girdiğinizde tarif sunan bir bot.',
      techStack: ['Python', 'Web Scraping', 'Backend'],
      date: '2024-2025'
    },
    {
      title: 'Şifre Yönetim Uygulaması',
      description: 'İlk başıma yazdığım bu projede Python dilini ve açıklık olarak PyQt5 kütüphanesini kullandım. Projenin amacı günümüz problemlerinden biri olan şifre unutmanın önüne geçmekti. Kullandığımız bütün platformların şifresini tek platformda birleştiren bir uygulama.',
      techStack: ['Python', 'PyQt5'],
      date: '2025-Devam Ediyor'
    },
    {
      title: 'Topluluk Yönetim Uygulaması',
      description: 'Takım kaptanıyım ve aynı zamanda Flutter geliştirme ekibindeyim. Proje: Flutter ve PHP kullanarak topluluklara SKS üzerinden yapıştıran işlemleri mobil uygulama ve web tabanlı bir sisteme geçirip bütün süreçleri optimize ve daha hızlı hale getirmek amacıyla bir projedir.',
      techStack: ['Flutter', 'PHP', 'Mobile Development'],
      date: '2024-Devam Ediyor'
    },
    {
      title: 'Kamp Oyunu',
      description: 'Unity kullanarak oyun mekaniklerini C# ile kodladım. Oyunun performans optimizasyonu üzerinde çalıştım ve çeşitli oyun içi özelliklerin geliştirilmesini gerçekleştirdim. Proje: Türkiye\'deki kamp alanlarını oyunlaştırarak tanıtmak ve turizmde yeni bir bakış açısı getirmek.',
      techStack: ['Unity', 'C#', 'Game Development'],
      date: '2023-2024'
    },
    {
      title: 'Roket Projesi',
      description: 'Roket takımında sosyal medya içeriklerini yönetim, projenin zamanlarına uygun medya planlaması yapım ve proje tanıtıcı içerikler oluşturdum.',
      techStack: ['Social Media Management', 'Project Management'],
      date: '2023-2024'
    }
  ];

  return (
    <ProjectsContainer>
      <Title>Projelerim</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <DateRange>{project.date}</DateRange>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <Tech key={techIndex}>{tech}</Tech>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 