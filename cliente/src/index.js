import React from 'react';
import ReactDOM from 'react-dom/client'; // Importamos desde 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Login';
import App from './App';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import reportWebVitals from './reportWebVitals';

// Usamos createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/listausuarios" element={<ListaUsuarios />} />
        <Route path='/agregarusuario' element={<AgregarUsuario />} />
        <Route path='/editarusuario/:documento' element={<EditarUsuario />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
