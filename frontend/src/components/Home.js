import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Bienvenido a la Aplicación de Gestión de Usuarios</h1>
      <p className="text-center">
        Esta aplicación te permite gestionar los inicios de sesión y registros de usuarios.
      </p>
      <div className="text-center">
        <Link to="/login" className="btn btn-primary mx-2">Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-secondary mx-2">Registrar</Link>
      </div>
    </div>
  );
}

export default Home;
