import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/projectCard';
import { getProjects } from '../helpers/data/projectsData';
import ProjectForm from '../components/ProjectForm';

const titleStyle = {
  textAlign: 'center',
  padding: '30px',
  color: '#333811'
};

const cardContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '30px'
};

const projectSection = {
  width: '96%',
  backgroundColor: '#f8ad97',
  margin: '0 auto'
};

export default function Projects({ admin }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
    <div id='projects' style={projectSection}>
      <h1 style={titleStyle}>projects</h1>
      <div style={cardContainer}>
        {projects.map((project) => (
          <ProjectCard
          key={project.firebaseKey}
          setProjects={setProjects}
          admin={admin}
          {...project}
          />
        ))}
      </div>
      {
        admin && <ProjectForm setProjects={setProjects}/>
      }
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  admin: PropTypes.any,
  setProjects: PropTypes.func
};
