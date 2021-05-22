import { Button } from 'reactstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/projectsData';

export default function ProjectForm({ setProjects, ...projectObj }) {
  const [project, setProject] = useState({
    description: projectObj?.description || '',
    firebaseKey: projectObj?.firebaseKey || null,
    githubUrl: projectObj?.githubUrl || '',
    screenshot: projectObj?.screenshot || '',
    technologiesUsed: projectObj?.technologiesUsed || '',
    title: projectObj?.title || '',
    url: projectObj?.url || ''
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectsArray) => setProjects(projectsArray));
    } else {
      addProject(project).then((projectsArray) => setProjects(projectsArray));
    }
  };
  return (
    <div>
      <div>
        <form id='addProjectForm'
         autoComplete='off'
         onSubmit={handleSubmit}
         >
           <label>Title</label>
           <input name='title'
           type='text'
           value={project.title}
           onChange={handleInputChange}
           >
           </input>
           <br/>

           <label>url</label>
           <input name='url'
           type='text'
           value={project.url}
           onChange={handleInputChange}
           >
           </input>
           <br/>

           <label>gitHub Url</label>
           <input name='githubUrl'
           type='text'
           value={project.githubUrl}
           onChange={handleInputChange}
           >
           </input>
           <br/>

           <label>screenshot</label>
           <input name='screenshot'
           type='text'
           value={project.screenshot}
           onChange={handleInputChange}
           >
           </input>
           <br/>

           <label>description</label>
           <input name='description'
           type='text'
           value={project.description}
           onChange={handleInputChange}
           >
           </input>
           <br/>

           <label>technologies</label>
           <input name='technologiesUsed'
           type='text'
           value={project.technologiesUsed}
           onChange={handleInputChange}
           >
           </input>
           <br/>
           <Button id='submitBtn' type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
}

ProjectForm.propTypes = {
  setProjects: PropTypes.func
};
