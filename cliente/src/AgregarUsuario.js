import React, {useState} from 'react'

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
        
        axios.post('/api/usuario/agregarusuario', cliente)
        .then(res=>{
            alert(res.data)
        })
        
    }
    return(

        <div className="container">

        <h1>Agregar Cliente</h1>
        <form class="row g-3">
        <div class="col-md-4">
                <label for="documento" class="form-label">Documento</label>
                <input type="number" class="form-control is-valid" value={documento} onChange={(e) => setDocumento(e.target)} id="documento" required/>
            </div>
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombres</label>
                <input type="text" class="form-control is-valid" value={nombre} onChange={(e) => setNombre(e.target)} id="nombre" required/>
            </div>
            <div class="col-md-4">
                <label for="apellido" class="form-label">Apellidos</label>
                <input type="text" class="form-control is-valid" value={apellido} onChange={(e) => setApellido(e.target)} id="apellido" required/>
            </div>
            <div class="col-md-6">
                <label for="correo" class="form-label">Correo</label>
                <input type="Email" class="form-control is-invalid" id="correo" value={correo} onChange={(e) => setCorreo(e.target)} aria-describedby="correoFeedback" required/>
            </div>
            <div class="col-md-3">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="number" class="form-control is-invalid" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target)} aria-describedby="telefonoFeedback" required/>
            </div>
            <div class="col-md-3">
                <label for="edad" class="form-label">Edad</label>
                <input type="number" class="form-control is-invalid" value={edad} onChange={(e) => setEdad(e.target)} id="edad" aria-describedby="edadFeedback" required/>
            </div>
            <div class="col-md-4">
                <label for="direccion" class="form-label">Direccion</label>
                <input type="text" class="form-control is-valid" value={direccion} onChange={(e) => setDireccion(e.target)} id="direccion" required/>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
                <label class="form-check-label" for="invalidCheck3">
                    Agree to terms and conditions
                </label>
                </div>
            </div>
            <div class="col-12">
                <button onClick={agregarUsuario} className="btn btn-success">Agregar Usuario</button>
            </div>
        </form>
    </div>
    )
}

export default AgregarUsuario