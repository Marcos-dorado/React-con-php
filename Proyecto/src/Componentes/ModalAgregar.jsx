import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalAgregar = ({ show, handleClose, handleAddPerson }) => {
  const [newPerson, setNewPerson] = useState({ id: '', name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleSubmit = () => {
    handleAddPerson(newPerson);
    setNewPerson({ id: '', name: '', description: '' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Persona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              name="id"
              value={newPerson.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={newPerson.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              name="description"
              value={newPerson.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Agregar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAgregar;
