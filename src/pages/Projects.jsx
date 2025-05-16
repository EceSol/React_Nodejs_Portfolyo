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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(79, 195, 247, 0.4);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #81d4fa;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #81d4fa, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
  transition: all 0.3s ease;

  &:hover {
    background: rgba(129, 212, 250, 0.2);
    transform: translateY(-2px);
  }

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
    transform: translateY(-2px);
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
    transform: translateY(-2px);
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
      title: 'Snake Game',
      description: 'Python kullanarak geliştirilen modern bir yılan oyunu. Özel efektler, skor sistemi ve farklı zorluk seviyeleri içeren eğlenceli bir oyun deneyimi sunar.',
      techStack: ['Python', 'Game Development'],
      github: 'https://github.com/EceSol/Snake_Game'
    },
    {
      title: 'Şifre Yönetim Uygulaması',
      description: 'PyQt5 kullanarak geliştirilen, kullanıcıların tüm platform şifrelerini güvenli bir şekilde saklayıp yönetebilecekleri bir masaüstü uygulaması. Şifreleme algoritmaları ve güvenli depolama özellikleri içerir.',
      techStack: ['Python', 'PyQt5', 'Cryptography'],
      github: 'https://github.com/EceSol/sifre_yonetim_uygulama'
    },
    {
      title: 'PyQt5 Word',
      description: 'PyQt5 kütüphanesi kullanılarak geliştirilmiş bir kelime işlemci uygulaması. Temel metin düzenleme özellikleri ve kullanıcı dostu arayüz.',
      techStack: ['Python', 'PyQt5', 'GUI Development'],
      github: 'https://github.com/EceSol/PyQt5_Word'
    }
  ];

  const additionalProjects = [
    {
      title: 'PyQt5 Soru Bankası',
      description: 'PyQt5 kütüphanesi kullanarak geliştirilen bir soru bankası uygulaması. Öğrencilerin çalışmalarını kolaylaştıran ve test çözmelerini sağlayan interaktif bir platform.',
      techStack: ['Python', 'PyQt5', 'Database'],
      github: 'https://github.com/EceSol/PyQt5_Soru_Bankasi'
    },
    {
      title: 'React Nodejs Portfolyo',
      description: 'React ve Node.js kullanılarak geliştirilen modern ve responsive portfolyo websitesi.',
      techStack: ['React', 'Node.js', 'JavaScript'],
      github: 'https://github.com/EceSol/React_Nodejs_Portfolyo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
    >
      <Title variants={cardVariants}>
        Projelerim
      </Title>
      <ProjectGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <TechTag
                  key={techIndex}
                  whileHover={{ scale: 1.05, y: -2 }}
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
              {project.liveLink && (
                <ProjectLink
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Canlı
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
      
      {showAllProjects && (
        <ProjectGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {additionalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, techIndex) => (
                  <TechTag
                    key={techIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
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
                {project.liveLink && (
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Canlı
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectGrid>
      )}

      <ShowMoreButton
        onClick={() => setShowAllProjects(!showAllProjects)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showAllProjects ? 'Daha Az Göster' : 'Daha Fazla Göster'}
      </ShowMoreButton>
    </ProjectsContainer>
  );
};

export default Projects; 