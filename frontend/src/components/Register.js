import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [name, setName] = useState('');
    const [dpi, setDpi] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Nuevo estado para el mensaje de éxito
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage(''); // Reiniciar el mensaje de éxito

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, dpi, email, password })
            });

            const result = await response.json();
            
            if (response.status === 201) {
                setSuccessMessage('Registro exitoso! Ahora puedes iniciar sesión.'); // Mensaje de éxito
                setTimeout(() => {
                    navigate('/login'); // Redirigir después de 2 segundos
                }, 2000);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError('Error en el registro');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registro</h2>
            <div className="card p-4 shadow-sm">
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">DPI</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="DPI" 
                            value={dpi} 
                            onChange={(e) => setDpi(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Contraseña" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Registrar</button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    {successMessage && <p className="text-success mt-2">{successMessage}</p>} {/* Mensaje de éxito */}
                </form>
                <p className="mt-3 text-center">
                    ¿Ya tienes una cuenta? 
                    <Link to="/login" className="link-primary"> Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
