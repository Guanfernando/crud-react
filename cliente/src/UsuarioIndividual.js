import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



function UsuarioIndividual({ cliente }) {
    const navegar = useNavigate();
    
    // Animación del scroll al bajar usando AOS
    useEffect(() => {
        AOS.init();
    }, []);

    // Función para borrar usuario
    function borrarUsuario(documento) {
        axios.post('api/usuario/borrarUsuario', { documento: documento })
            .then(res => {
                console.log(res.data);
                alert(res.data);
                navegar(0);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos='zoom-in'>
                    <h2>Usuario Individual</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>{cliente.documento}</li>
                        <li className='list-group-item'>{cliente.nombre}</li>
                        <li className='list-group-item'>{cliente.apellido}</li>
                        <li className='list-group-item'>{cliente.correo}</li>
                        <li className='list-group-item'>{cliente.telefono}</li>
                        <li className='list-group-item'>{cliente.edad}</li>
                        <li className='list-group-item'>{cliente.direccion}</li>
                    </ul>
                    <Link to={`/EditarUsuario/${cliente.documento}`}>
                        <button className='btn btn-success'>Editar</button>
                    </Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => borrarUsuario(cliente.documento)}>Borrar</button>
                    <hr className='mt-4' />
                </div>
            </div>
        </div>
    );
}

export default UsuarioIndividual;
