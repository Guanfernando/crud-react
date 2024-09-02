import React, {useState} from 'react'
import axios from "axios";

function AgregarUsuario(){
     // hooks
    const[documento, setDocumento] = useState('')
    const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[correo, setCorreo] = useState('')
    const[telefono, setTelefono] = useState('')
    const[edad, setEdad] = useState('')
    const[direccion, setDireccion] = useState('')

    function agregarUsuario(){
        let cliente={
            documento:documento,
            nombre:nombre,
            apellido:apellido,
            correo:correo,
            telefono:telefono,
            edad:edad,
            direccion:direccion
        }
        console.log (cliente);
        
        // Enviar datos al servidor
        axios.post('/api/usuario/AgregarUsuario', cliente)
        .then(res => {
            alert(res.data);
            console.log(cliente);
        })
        .catch(err => {
            console.log(err);
        });
        
    }
    return(

        <div className="container">

        <h1>Agregar Cliente</h1>
        <form className="row g-3">
        <div className="col-md-4">
                <label htmlFor="documento" className="form-label">Documento</label>
                <input type="number" className="form-control is-valid" value={documento} onChange={(e) => setDocumento(e.target.value)} id="documento" required/>
            </div>
            <div className="col-md-4">
                <label htmlFor="nombre" className="form-label">Nombres</label>
                <input type="text" className="form-control is-valid" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" required/>
            </div>
            <div className="col-md-4">
                <label htmlFor="apellido" className="form-label">Apellidos</label>
                <input type="text" className="form-control is-valid" value={apellido} onChange={(e) => setApellido(e.target.value)} id="apellido" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="Email" className="form-control is-valid" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} aria-describedby="correoFeedback" required/>
            </div>
            <div className="col-md-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="number" className="form-control is-valid" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} aria-describedby="telefonoFeedback" required/>
            </div>
            <div className="col-md-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input type="number" className="form-control is-valid" value={edad} onChange={(e) => setEdad(e.target.value)} id="edad" aria-describedby="edadFeedback" required/>
            </div>
            <div className="col-md-4">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control is-valid" value={direccion} onChange={(e) => setDireccion(e.target.value)} id="direccion" required/>
            </div>
            <div className="col-12">
                <button onClick={agregarUsuario} className="btn btn-success">Agregar Usuario</button>
            </div>
        </form>
    </div>
    )
}

export default AgregarUsuario;