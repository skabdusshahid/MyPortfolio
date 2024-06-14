import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
  background: #fff;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectCard = ({ project }) => (
  <Card>
    <ProjectTitle>{project.title}</ProjectTitle>
    <ProjectDescription>{project.description}</ProjectDescription>
    <a href={project.link}>View Project</a>
  </Card>
);

export default ProjectCard;
