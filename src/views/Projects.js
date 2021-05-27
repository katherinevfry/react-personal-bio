import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCard from '../components/projectCard';
import { getProjects } from '../helpers/data/projectsData';
import ProjectForm from '../components/ProjectForm';

const TitleStyle = styled.h1`
  text-align: center;
  padding: 30px;
  color: #333811;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const ProjectSection = styled.div`
  width: 96%;
  margin: 0 auto;
`;

export default function Projects({ admin }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
    <ProjectSection id='projects'>
      <TitleStyle>projects</TitleStyle>
      <CardContainer>
        {projects.map((project) => (
          <ProjectCard
          key={project.firebaseKey}
          setProjects={setProjects}
          admin={admin}
          {...project}
          />
        ))}
      </CardContainer>
      {
        admin && <ProjectForm setProjects={setProjects}/>
      }
    </ProjectSection>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  admin: PropTypes.any,
  setProjects: PropTypes.func
};
