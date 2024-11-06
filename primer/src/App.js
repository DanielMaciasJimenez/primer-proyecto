import './App.css';
import Barrabusqueda from './components/barrabusqueda';
import Servicios from './components/servicios';

function App() {
  return (
    <div className="App">
      <Barrabusqueda></Barrabusqueda> <br></br><br></br>
      <h1 className="servicios_titulo">Nuestros servicios</h1>
      <Servicios></Servicios>
    
    </div>
  );
}

export default App;
