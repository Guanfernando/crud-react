import React, { useEffect } from 'react'
import { axios } from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { AOS } from 'aos';
import 'aos/dist/aos.css';

function UsuarioIndividual({cliente}){
    const navegar = useNavigate()
    
    //animacion del scroll al bajar usando aos
    useEffect(() => {
        AOS.init()
    },[])

    //funcion para borrar usuario
    function borrarUsuario(documento){
        axios.post(api.usuario/borrarUsuario, {documento:documento})
        .then(res=>{
            console.log(res.data)
            alert(res.data)
            navegar(0)
        })
        .catch(err =>{
            console.log(err.error)
        })
    }
    return(
        <div>
            <h2>Usuario Individual</h2>
        </div>
    )
}

export default UsuarioIndividual