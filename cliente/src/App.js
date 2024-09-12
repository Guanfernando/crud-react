import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Mensaje de bienvenida y botones centrados */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>Software de Gestión de Clientes</h1>
            <p>Bienvenido a nuestro sistema, selecciona una opción para continuar.</p>

            {/* Botones centrados */}
            <div className="mt-4">
              <Link to="/listausuarios" className="btn btn-primary mx-2">Consultar Clientes</Link>
              <Link to="/agregarusuario" className="btn btn-success mx-2">Agregar Cliente</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
