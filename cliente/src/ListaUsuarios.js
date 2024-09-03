import React, {useEffect, useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'



function ListaUsuarios(){
    
    const[datausuarios, setdatausuario]= useState([])
    useEffect(() =>{
        axios.get('api/usuario/obtenerUsuario')
        .then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    // mapear lista de usuarios en objeto de usuario
    const listaUsuarios = datausuarios.map(cliente => {
        return (
            <div>
                <UsuarioIndividual cliente={cliente}/>
            </div>
        )
    })
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {listaUsuarios}
            </ul>
        </div>
    )
}

export default ListaUsuarios;