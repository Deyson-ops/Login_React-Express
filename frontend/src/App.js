import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Welcome from './components/Welcome';
import { UserProvider } from './components/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/welcome" element={<Welcome />} /> {/* Página de bienvenida */}
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
