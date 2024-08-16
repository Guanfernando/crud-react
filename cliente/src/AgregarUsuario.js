import React from 'react'
function AgregarUsuario(){

    function agregarUsuario(){

    }
    return(

        <div className="container">

        <h1>Agregar Cliente</h1>
        <form class="row g-3">
        <div class="col-md-4">
                <label for="documento" class="form-label">Documento</label>
                <input type="number" class="form-control is-valid" id="documento" required/>
                <div class="valid-feedback">
                Correcto
                </div>
            </div>
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombres</label>
                <input type="text" class="form-control is-valid" id="nombre" required/>
                <div class="valid-feedback">
                Correcto
                </div>
            </div>
            <div class="col-md-4">
                <label for="apellido" class="form-label">Apellidos</label>
                <input type="text" class="form-control is-valid" id="apellido" required/>
                <div class="valid-feedback">
                Correcto
                </div>
            </div>
            <div class="col-md-6">
                <label for="correo" class="form-label">Correo</label>
                <input type="Email" class="form-control is-invalid" id="correo" aria-describedby="correoFeedback" required/>
                <div id="correoFeedback" class="invalid-feedback">
                Ingrese un correo valido
                </div>
            </div>
            <div class="col-md-3">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="number" class="form-control is-invalid" id="telefono" aria-describedby="telefonoFeedback" required/>
            </div>
            <div class="col-md-3">
                <label for="edad" class="form-label">Edad</label>
                <input type="number" class="form-control is-invalid" id="edad" aria-describedby="edadFeedback" required/>
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