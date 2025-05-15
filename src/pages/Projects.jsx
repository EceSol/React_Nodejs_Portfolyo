import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 2rem 0;
  scroll-margin-top: 80px;
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
  position: relative;
  overflow: hidden;

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

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4fc3f7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #81d4fa;
  }
`;

const ToggleButton = styled.button`
  background: rgba(79, 195, 247, 0.1);
  color: #4fc3f7;
  border: 1px solid #4fc3f7;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin: 3rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 195, 247, 0.2);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: 'Yemek Tarif Asistanı',
      description: 'Fromscrape ve Backend kullanarak geliştirilen, elinizde olan malzemelere göre yemek tarifi sunan akıllı bir asistan. Kullanıcıların yemek türü, mutfak tercihi ve alerjen bilgilerini dikkate alarak kişiselleştirilmiş tarifler sunar.',
      techStack: ['Python', 'Web Scraping', 'Backend'],
      date: '2024-2025',
      github: 'https://github.com/yourusername/yemek-tarif-asistani'
    },
    {
      title: 'Şifre Yönetim Uygulaması',
      description: 'PyQt5 kullanarak geliştirilen, kullanıcıların tüm platform şifrelerini güvenli bir şekilde saklayıp yönetebilecekleri bir masaüstü uygulaması. Şifreleme algoritmaları ve güvenli depolama özellikleri içerir.',
      techStack: ['Python', 'PyQt5', 'Cryptography'],
      date: '2025-Devam Ediyor',
      github: 'https://github.com/yourusername/sifre-yonetimi'
    },
    {
      title: 'Snake Game',
      description: 'Klasik yılan oyununun modern bir yorumu. Özel efektler, skor sistemi ve farklı zorluk seviyeleri içeren, JavaScript kullanılarak geliştirilmiş bir web oyunu.',
      techStack: ['JavaScript', 'HTML5', 'CSS3'],
      date: '2024',
      github: 'https://github.com/yourusername/snake-game',
      demo: 'https://yourusername.github.io/snake-game'
    }
  ];

  const additionalProjects = [
    {
      title: 'Topluluk Yönetim Uygulaması',
      description: 'Flutter ve PHP kullanarak geliştirilen, topluluk etkinliklerini ve üye yönetimini kolaylaştıran mobil uygulama. SKS süreçlerini optimize eder ve dijitalleştirir.',
      techStack: ['Flutter', 'PHP', 'Mobile Development'],
      date: '2024-Devam Ediyor',
      github: 'https://github.com/yourusername/topluluk-yonetim'
    },
    {
      title: 'Kamp Oyunu',
      description: 'Unity ve C# kullanarak geliştirilen, Türkiye\'deki kamp alanlarını tanıtan interaktif bir oyun. Performans optimizasyonu ve oyun mekaniği geliştirmeleri içerir.',
      techStack: ['Unity', 'C#', 'Game Development'],
      date: '2023-2024',
      github: 'https://github.com/yourusername/kamp-oyunu'
    },
    {
      title: 'Roket Projesi',
      description: 'SI-RA Yüksek İrfa Roket Takımı için geliştirilen proje yönetim ve sosyal medya içerik planlaması sistemi.',
      techStack: ['Project Management', 'Social Media'],
      date: '2023-2024'
    },
    {
      title: 'To-Do List Uygulaması',
      description: 'React ve TypeScript kullanılarak geliştirilen, görev yönetimi ve organizasyon uygulaması.',
      techStack: ['React', 'TypeScript', 'Styled Components'],
      date: '2024',
      github: 'https://github.com/yourusername/todo-app'
    },
    {
      title: 'Weather App',
      description: 'Hava durumu API\'ı kullanarak geliştirilen, anlık ve 5 günlük hava durumu tahminlerini gösteren web uygulaması.',
      techStack: ['JavaScript', 'API Integration', 'CSS3'],
      date: '2024',
      github: 'https://github.com/yourusername/weather-app'
    }
  ];

  const displayedProjects = showAllProjects 
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

  const toggleProjects = () => {
    if (showAllProjects) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        // Scroll işlemini başlat
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Geçici olarak scroll'u kilitle
        document.body.style.overflow = 'hidden';

        // Scroll tamamlanana kadar bekle
        setTimeout(() => {
          setShowAllProjects(false);
          // Scroll kilidini kaldır
          document.body.style.overflow = 'auto';
        }, 500);
      }
    } else {
      setShowAllProjects(true);
    }
  };

  return (
    <ProjectsContainer id="projects">
      <Title>Projelerim</Title>
      <ProjectGrid>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <DateRange>{project.date}</DateRange>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <Tech key={techIndex}>{tech}</Tech>
              ))}
            </TechStack>
            <Links>
              {project.github && (
                <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </LinkButton>
              )}
              {project.demo && (
                <LinkButton href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </LinkButton>
              )}
            </Links>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <ToggleButton onClick={toggleProjects}>
        {showAllProjects ? 'Daha Az Göster' : 'Daha Fazla Göster'}
      </ToggleButton>
    </ProjectsContainer>
  );
};

export default Projects; 