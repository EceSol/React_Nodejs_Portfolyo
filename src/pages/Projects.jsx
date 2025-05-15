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

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #4fc3f7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #29b6f6;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Snake Game',
      description: 'Python ile geliştirilmiş klasik yılan oyunu.',
      techStack: ['Python'],
      githubLink: 'https://github.com/EceSol/Snake_Game',
    },
    {
      title: 'Şifre Yönetim Uygulaması',
      description: 'Kullanıcıların şifrelerini güvenli bir şekilde saklayabilecekleri bir uygulama.',
      techStack: ['Python'],
      githubLink: 'https://github.com/EceSol/sifre_yonetim_uygulama',
    },
    {
      title: 'PyQt5 Soru Bankası',
      description: 'PyQt5 kütüphanesi kullanılarak geliştirilmiş soru bankası uygulaması.',
      techStack: ['Python', 'PyQt5'],
      githubLink: 'https://github.com/EceSol/PyQt5_Soru_Bankasi',
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Projelerim</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, techIndex) => (
                <Tech key={techIndex}>{tech}</Tech>
              ))}
            </TechStack>
            <Links>
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </Link>
              {project.demoLink && (
                <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </Link>
              )}
            </Links>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 