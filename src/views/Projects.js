import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/projectCard';
import { getProjects } from '../helpers/data/projectsData';
import ProjectForm from '../components/ProjectForm';

export default function Projects({ admin }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  const titleStyle = {
    marginTop: '65px',
    marginLeft: '20px'
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '20px',
    marginRight: '20px',
  };

  return (
    <div id='projects'>
      <h1 style={titleStyle}>Projects</h1>
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
