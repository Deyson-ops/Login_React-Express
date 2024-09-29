const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


let users = [];

// Ruta de registro
app.post('/register', (req, res) => {
    const { name, dpi, email, password } = req.body;

    // Log para ver los datos recibidos
    console.log('Datos recibidos:', req.body);

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'El email ya está registrado' });
    }

    users.push({ name, dpi, email, password });
    return res.status(201).json({ message: 'Registro exitoso' });
});


// Ruta de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verificar las credenciales
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    return res.status(200).json({ message: 'Login exitoso', user });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
