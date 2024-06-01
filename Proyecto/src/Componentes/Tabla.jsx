import React, { useState } from 'react';
import ModalAgregar from './ModalAgregar';
import ModalEliminar from './ModalEliminar';

const Tabla = () => {
  const initialData = [
    { id: 1, name: 'John Doe', description: 'Developer' },
    { id: 2, name: 'Jane Smith', description: 'Designer' },
    { id: 3, name: 'Mike Johnson', description: 'Manager' },
  ];

  const [data, setData] = useState(initialData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [personToDelete, setPersonToDelete] = useState(null);

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleShowDeleteModal = (person) => {
    setPersonToDelete(person);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleAddPerson = (newPerson) => {
    setData([...data, newPerson]);
  };

  const handleDeletePerson = () => {
    setData(data.filter(person => person.id !== personToDelete.id));
    setShowDeleteModal(false);
  };

  const handleClear = () => {
    setData([]);
  };

  return (
    <div className="container mt-5">
      <h2>Bootstrap Table with Actions</h2>
      <button className="btn btn-success mb-3 mr-2" onClick={handleShowAddModal}>Agregar</button>
      <button className="btn btn-warning mb-3" onClick={handleClear}>Limpiar Tabla</button>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-primary mr-2">Actualizar</button>
                  <button className="btn btn-danger" onClick={() => handleShowDeleteModal(item)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>

      <ModalAgregar
        show={showAddModal}
        handleClose={handleCloseAddModal}
        handleAddPerson={handleAddPerson}
      />

      <ModalEliminar
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDeletePerson={handleDeletePerson}
        person={personToDelete}
      />
    </div>
  );
};

export default Tabla;
