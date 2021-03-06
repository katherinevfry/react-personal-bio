import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

const ModalImg = styled.img`
  width: 20rem;
  object-fit: cover;
  margin: 0 auto;
`;

export default function ModalPop({ showModal, setShowModal, ...project }) {
  const toggle = () => setShowModal(!showModal);
  return (
    <div>
      {showModal && <Modal id='modal' isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{project.title}</ModalHeader>
        <ModalBody>
          <ModalImg src={project.screenshot}></ModalImg>
          <p>{project.description}</p>
          <p>{project.technologiesUsed}</p>
        </ModalBody>
        <ModalFooter>
          <a href={project.githubUrl}>Github</a>
          <br></br>
          <a href={project.url}>Deployed Project</a>
        </ModalFooter>
      </Modal>
      }
    </div>
  );
}

ModalPop.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  project: PropTypes.object
};
