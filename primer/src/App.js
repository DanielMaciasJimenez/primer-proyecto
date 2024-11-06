
import './App.css';
import Barrabusqueda from './components/barrabusqueda';
import Servicios from './components/servicios';
import Bañogratis from './components/bañogratis';
import Consultagratis from './components/consultagratis';
import Piedepagina from './components/piedepagina';
function App() {
  return (
    <div className="App">
      <Barrabusqueda></Barrabusqueda> <br></br><br></br>
      <h1 className="servicios_titulo">Nuestros servicios</h1>
      <Servicios></Servicios><br></br><br></br>

      <p className="texto_bloque1">En Veterinaria Luna puedes adelantar
          tus necesidades mediante este canal, o directamente
          a nustra linea de Whatsapp 3164748855, pide tu cita facil.</p>
       <br></br><br></br>
      
      <h2 className="emergencia">Linea de emergencia 24/7.  +57 3015829318</h2>
      <br></br><br></br>

      <Bañogratis></Bañogratis>
      <br></br>
      <p className="titulo_bano">¡Primer baño gratis!</p>
   
    
      <Consultagratis></Consultagratis>
   
      <p className="consultagratis">¡Primera consulta gratis!</p>
      <br></br>
   

      <Piedepagina></Piedepagina>
   
   
   
   
    </div>
  );
}

export default App;


