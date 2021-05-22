import React, { useState } from 'react';
import {
  Button,
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/data/projectsData';
import ProjectForm from './ProjectForm';

const cardStyle = {
  width: '25rem',
  backgroundColor: '#fffbf0',
  margin: '10px'
};

export default function ProjectCard({ admin, setProjects, ...project }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(project.firebaseKey)
          .then((projectsArray) => setProjects(projectsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing here');
    }
  };
  return (
    <div>
      <Card style={cardStyle}>
        <CardImg src={project.screenshot}></CardImg>
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardText>{project.description}</CardText>
          <CardText>{project.technologiesUsed}</CardText>
          <a href={project.githubUrl}>Github</a>
          <br></br>
          <a href={project.url}>Deployed Project</a>
          {
            admin && <div>
            <Button onClick={() => handleClick('delete')}>Delete Project</Button>
            <Button onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Project'}</Button>
            {
              editing && <ProjectForm
              setProjects={setProjects}
              {...project}
              />
            }
            </div>
          }
        </CardBody>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
