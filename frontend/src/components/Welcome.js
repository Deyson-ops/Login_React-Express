import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null); // Limpiar el usuario del contexto
        navigate('/'); // Redirigir a la página de inicio
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Bienvenido, {user.name}!</h2>
            <div className="text-center mt-4">
                <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </div>
    );
};

export default Welcome;
