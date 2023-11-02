import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);

    const validar = () => {
        if (nombre.trim().length < 3 || color.length < 6) {
            setError(true);
            return false;
        }
        setError(false);
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            console.log('Nombre:', nombre);
            console.log('Color favorito:', color);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            <br />
            <label htmlFor="color">Color favorito:</label>
            <input type="text" id="color" name="color" value={color} onChange={e => setColor(e.target.value)} />
            <br />
            <button type="submit">Enviar</button>
            {error && <p>Por favor chequea que la información sea correcta</p>}
        </form>
    );
}

export default Formulario;