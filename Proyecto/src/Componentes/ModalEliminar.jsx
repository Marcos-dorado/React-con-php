import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalEliminar = ({ show, handleClose, handleDeletePerson, person }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Persona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {person ? (
          <p>¿Estás seguro de que quieres eliminar a {person.name}?</p>
        ) : (
          <p>Persona no encontrada.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeletePerson}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEliminar;
