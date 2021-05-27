import React, { useState } from 'react';
import {
  Button,
  Card, CardBody, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/data/projectsData';
import ProjectForm from './ProjectForm';
import ModalPop from './Modal';

export default function ProjectCard({ admin, setProjects, ...project }) {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };
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
      <Card id='cardStyle'>
        <CardImg src={project.screenshot}></CardImg>
        <CardBody>
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
        <h6 id='btnLink' onClick={openModal}>learn more</h6>
      </Card>
      <ModalPop showModal={showModal} setShowModal={setShowModal} {...project}/>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
