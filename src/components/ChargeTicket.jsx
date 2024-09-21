import React, { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    fecha: '',
    monto: '',
    casa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del ticket:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-blue-600">SliceTicket</div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">How it works</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Form Section */}
      <main className="flex flex-grow items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mx-4">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Ingrese su Ticket</h2>
          <form onSubmit={handleSubmit}>
            {/* Fecha */}
            <div className="mb-4">
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Monto Total */}
            <div className="mb-4">
              <label htmlFor="monto" className="block text-sm font-medium text-gray-700 mb-2">Monto Total:</label>
              <input
                type="number"
                id="monto"
                name="monto"
                value={formData.monto}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Casa a tu nombre */}
            <div className="mb-6">
              <label htmlFor="casa" className="block text-sm font-medium text-gray-700 mb-2">Casa a tu nombre:</label>
              <select
                id="casa"
                name="casa"
                value={formData.casa}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="casa1">Casa 1</option>
                <option value="casa2">Casa 2</option>
                <option value="casa3">Casa 3</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TicketForm;
