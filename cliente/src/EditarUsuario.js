import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditarUsuario() {
    const params = useParams();

    const [documento, setDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');

    // Cargar los datos del usuario al iniciar el componente
    useEffect(() => {
        axios.post('/api/usuario/obtenerDataUsuario', { documento: params.documento }).then(res => {
            const dataCliente = res.data[0];
            setDocumento(dataCliente.documento);
            setNombre(dataCliente.nombre);
            setApellido(dataCliente.apellido);
            setCorreo(dataCliente.correo);
            setTelefono(dataCliente.telefono);
            setEdad(dataCliente.edad);
            setDireccion(dataCliente.direccion);
        }).catch(err => {
            console.log(err);
            alert('Error al cargar los datos del usuario');
        });
    }, [params.documento]);

    // Función para la actualización de datos
    function editarUsuario(event) {
        event.preventDefault(); // Evitar que el formulario recargue la página

        const actualizarCliente = {
            documento,
            nombre,
            apellido,
            correo,
            telefono,
            edad,
            direccion
        };

        axios.post('/api/usuario/actualizarCliente', actualizarCliente).then(res => {
            alert('Usuario actualizado con éxito');
        }).catch(error => {
            console.log(error);
            alert('Error al actualizar el usuario');
        });
    }

    return (
        <div className="container">
            <h1>Editar Cliente</h1>
            <form className="row g-3" onSubmit={editarUsuario}>
                <div className="col-md-4">
                    <label htmlFor="documento" className="form-label">Documento</label>
                    <input type="number" className="form-control is-valid" value={documento} onChange={(e) => setDocumento(e.target.value)} id="documento" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" className="form-control is-valid" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="apellido" className="form-label">Apellidos</label>
                    <input type="text" className="form-control is-valid" value={apellido} onChange={(e) => setApellido(e.target.value)} id="apellido" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input type="email" className="form-control is-valid" value={correo} onChange={(e) => setCorreo(e.target.value)} id="correo" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="number" className="form-control is-valid" value={telefono} onChange={(e) => setTelefono(e.target.value)} id="telefono" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="number" className="form-control is-valid" value={edad} onChange={(e) => setEdad(e.target.value)} id="edad" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control is-valid" value={direccion} onChange={(e) => setDireccion(e.target.value)} id="direccion" required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Editar Cliente</button>
                </div>
            </form>
        </div>
    );
}

export default EditarUsuario;
