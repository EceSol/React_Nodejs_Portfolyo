import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useScroll, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  min-height: 50vh;
  scroll-margin-top: 80px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const RevealContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4fc3f7, transparent);
    border-radius: 2px;
  }

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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(129, 212, 250, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 900px) {
    padding: 1.25rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
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
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const featuredProjects = [
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
      description: 'Python kullanarak geliştirilen modern bir yılan oyunu. Özel efektler, skor sistemi ve farklı zorluk seviyeleri içeren eğlenceli bir oyun deneyimi sunar.',
      techStack: ['Python', 'Game Development'],
      github: 'https://github.com/EceSol/Snake_Game'
    }
  ];

  const additionalProjects = [
    {
      title: 'PyQt5 Word',
      description: 'PyQt5 kütüphanesi kullanılarak geliştirilmiş bir kelime işlemci uygulaması. Temel metin düzenleme özellikleri ve kullanıcı dostu arayüz.',
      techStack: ['Python', 'PyQt5', 'GUI Development'],
      github: 'https://github.com/EceSol/PyQt5_Word'
    },
    {
      title: 'PyQt5 Soru Bankası',
      description: 'PyQt5 kütüphanesi kullanarak geliştirilen bir soru bankası uygulaması. Öğrencilerin çalışmalarını kolaylaştıran ve test çözmelerini sağlayan interaktif bir platform.',
      techStack: ['Python', 'PyQt5', 'Database'],
      github: 'https://github.com/EceSol/PyQt5_Soru_Bankasi'
    }
  ];

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
      filter: "blur(5px)"
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

  const revealVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      skewY: 1,
      filter: "blur(5px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      skewY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (inView || showAllProjects) {
      controls.start('visible');
    }
  }, [controls, inView, showAllProjects]);

  const handleShowMore = () => {
    setShowAllProjects(true);
    // After state update, ensure animations are triggered
    setTimeout(() => {
      controls.start('visible');
    }, 100);
  };

  const handleShowLess = () => {
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) {
      const headerOffset = 100; // Biraz daha fazla offset ekledim başlığın tam görünmesi için
      const elementPosition = projectsTitle.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Scroll başladıktan kısa bir süre sonra state'i güncelle
      setTimeout(() => {
        setShowAllProjects(false);
      }, 300); // Scroll başladıktan sonra state'i güncelle
    }
  };

  return (
    <ProjectsContainer
      id="projects"
      ref={ref}
      as={motion.div}
      initial="hidden"
      animate={controls}
    >
      <RevealContainer
        variants={revealVariants}
      >
        <Title>
          Projelerim
        </Title>
      </RevealContainer>

      <RevealContainer
        variants={containerVariants}
      >
        <ProjectGrid>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
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
      </RevealContainer>
      
      {showAllProjects && (
        <RevealContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProjectGrid>
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
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
        </RevealContainer>
      )}

      <ShowMoreButton
        onClick={showAllProjects ? handleShowLess : handleShowMore}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showAllProjects ? 'Daha Az Göster' : 'Daha Fazla Göster'}
      </ShowMoreButton>
    </ProjectsContainer>
  );
};

export default Projects; 