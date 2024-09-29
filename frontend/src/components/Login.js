import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('https://login-react-express.onrender.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 200) {
                const result = await response.json();
                setUser(result.user);
                navigate('/welcome'); // Redirigir a la página de bienvenida
            } else {
                const result = await response.json();
                setError(result.message);
            }
        } catch (error) {
            setError('Error en el login');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <div className="card p-4 shadow-sm">
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </form>
                <p className="mt-3 text-center">
                    ¿No tienes una cuenta? 
                    <Link to="/register" className="link-primary"> Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
