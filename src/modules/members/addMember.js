import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './form';

const AddMember = ({ modal, toggle, onSubmit }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Member</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} />
        </ModalBody>
        <ModalFooter />
      </Modal>
    </div>
  );
};

export default AddMember;
