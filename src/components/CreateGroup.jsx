import React, { useState } from 'react';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [members, setMembers] = useState(['']);
  const [error, setError] = useState('');

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName) {
      setError('El nombre del grupo es obligatorio.');
      return;
    }
    setError('');
    // Aquí va la lógica de envío de datos
    console.log({ groupName, groupDescription, members });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Crear un Nuevo Grupo</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Nombre del grupo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="groupName">
            Nombre del Grupo
          </label>
          <input
            id="groupName"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Nombre del grupo"
          />
        </div>

        {/* Descripción del grupo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="groupDescription">
            Descripción
          </label>
          <textarea
            id="groupDescription"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Descripción del grupo"
          ></textarea>
        </div>

        {/* Agregar miembros */}
       


        {/* Botón de crear grupo */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Crear Grupo
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
