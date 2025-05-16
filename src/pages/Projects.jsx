import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(79, 195, 247, 0.2);
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #81d4fa;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(motion.span)`
  background: rgba(129, 212, 250, 0.1);
  color: #81d4fa;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(129, 212, 250, 0.2);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  color: #81d4fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(129, 212, 250, 0.1);
  border: 1px solid rgba(129, 212, 250, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(129, 212, 250, 0.15);
    border-color: rgba(129, 212, 250, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ShowMoreButton = styled(motion.button)`
  background: rgba(129, 212, 250, 0.1);
  color: #81d4fa;
  border: 1px solid rgba(129, 212, 250, 0.2);
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(129, 212, 250, 0.15);
    border-color: rgba(129, 212, 250, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`;

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: "Portfolyo Websitesi",
      description: "Kişisel portfolyo websitesi. React ve styled-components kullanılarak geliştirildi.",
      techStack: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourwebsite.com"
    },
    {
      title: 'Yemek Tarif Asistanı',
      description: 'Fromscrape ve Backend kullanarak geliştirilen, elinizde olan malzemelere göre yemek tarifi sunan akıllı bir asistan. Kullanıcıların yemek türü, mutfak tercihi ve alerjen bilgilerini dikkate alarak kişiselleştirilmiş tarifler sunar.',
      techStack: ['Python', 'Web Scraping', 'Backend'],
      github: 'https://github.com/k0laa/Yemek_Tarif_Asistani'
    },
    {
      title: 'Şifre Yönetim Uygulaması',
      description: 'PyQt5 kullanarak geliştirilen, kullanıcıların tüm platform şifrelerini güvenli bir şekilde saklayıp yönetebilecekleri bir masaüstü uygulaması. Şifreleme algoritmaları ve güvenli depolama özellikleri içerir.',
      techStack: ['Python', 'PyQt5', 'Cryptography'],
      github: 'https://github.com/EceSol/sifre_yonetim_uygulama'
    },
    {
      title: 'Snake Game',
      description: 'Klasik yılan oyununun modern bir yorumu. Özel efektler, skor sistemi ve farklı zorluk seviyeleri içeren, JavaScript kullanılarak geliştirilmiş bir web oyunu.',
      techStack: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/EceSol/Snake_Game',
    }
  ];

  const additionalProjects = [
    {
      title: 'Topluluk Yönetim Uygulaması',
      description: 'Flutter ve PHP kullanarak geliştirilen, topluluk etkinliklerini ve üye yönetimini kolaylaştıran mobil uygulama. SKS süreçlerini optimize eder ve dijitalleştirir.',
      techStack: ['Flutter', 'PHP', 'Mobile Development'],
     
    },
    {
      title: 'Kamp Oyunu',
      description: 'Unity ve C# kullanarak geliştirilen, Türkiye\'deki kamp alanlarını tanıtan interaktif bir oyun. Performans optimizasyonu ve oyun mekaniği geliştirmeleri içerir.',
      techStack: ['Unity', 'C#', 'Game Development'],
   
    },
    {
      title: 'Roket Projesi',
      description: 'SI-RA Yüksek İrfa Roket Takımı için geliştirilen proje yönetim ve sosyal medya içerik planlaması sistemi.',
      techStack: ['Project Management', 'Social Media']
    },
    {
      title: 'To-Do List Uygulaması',
      description: 'React ve TypeScript kullanılarak geliştirilen, görev yönetimi ve organizasyon uygulaması.',
      techStack: ['React', 'TypeScript', 'Styled Components'],
    
    },
    {
      title: 'Weather App',
      description: 'Hava durumu API\'ı kullanarak geliştirilen, anlık ve 5 günlük hava durumu tahminlerini gösteren web uygulaması.',
      techStack: ['JavaScript', 'API Integration', 'CSS3'],
  
    }
  ];

  const displayedProjects = showAllProjects 
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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

  return (
    <ProjectsContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
      <Title variants={cardVariants}>
        Projeler
      </Title>
      <ProjectGrid>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <TechTag
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              {project.github && (
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </ProjectLink>
              )}
              {project.demo && (
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
      {additionalProjects.length > 0 && (
        <ShowMoreButton
          onClick={() => setShowAllProjects(!showAllProjects)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllProjects ? "Daha Az Göster" : "Daha Fazla Göster"}
        </ShowMoreButton>
      )}
    </ProjectsContainer>
  );
};

export default Projects; 