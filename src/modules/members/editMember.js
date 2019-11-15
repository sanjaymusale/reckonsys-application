import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './form';

const EditMember = ({ modal, toggle, onSubmit, editingData }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Member</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} data={editingData} />
        </ModalBody>
        <ModalFooter />
      </Modal>
    </div>
  );
};

export default EditMember;
