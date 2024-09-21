import React, { useState } from 'react';
import ResetPasswordModal from './ResetPasswordModal.jsx'; // Importamos el modal para restablecer la contraseña

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto o cerrado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Configuración actualizada:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-blue-600">Configuración de la Cuenta</div>
        </div>
      </header>

      {/* Form Section */}
      <main className="flex flex-grow items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mx-4">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Actualiza tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            {/* Nombre de Usuario */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Nombre de Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Botón para guardar cambios */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
            >
              Guardar Cambios
            </button>
          </form>

          {/* Botón para abrir el modal de restablecer contraseña */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Restablecer Contraseña
          </button>
        </div>
      </main>

      {/* Modal de restablecer contraseña */}
      {isModalOpen && <ResetPasswordModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default AccountSettings;