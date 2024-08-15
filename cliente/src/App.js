import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>CRUD SENA</h1>
        <BrowserRouter>
          <Routes>
            <Route path= '/' element={<ListaUsuarios/>} exact></Route>
            <Route path= '/agregarusurio' element={<AgregarUsuario/>} exact></Route>
            <Route path= '/editarusurio' element={<EditarUsuario/>} exact></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
