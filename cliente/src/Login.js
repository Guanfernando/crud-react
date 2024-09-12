import './App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bienvenido</h1>
            <button onClick={() => navigate('/app')}>
                Ingresar
            </button>
        </div>
    );
}

export default Login;
