import consultab from '../img/consultabaño.png';
import consultaest from '../img/consultaesteri.png';
import consultagene from '../img/consultageneral.png';
import consultanutri from '../img/consultanutricional.png';
import consultaprofi from '../img/consultaprofi.png';
import consultavacu from '../img/consultavacu.png';
import '../components/servicios.css';


function Servicios () {
    return (
        <div className="espacio_consultas">
             <img className="consultas" src={consultab} alt="consulta baño"/>
             <img className="consultas" src={consultaest} alt="consulta esterilización"/>
             <img className="consultas" src={consultagene} alt="consulta general"/>
             <img className="consultas" src={consultanutri} alt="consulta nutricional"/>
             <img className="consultas" src={consultaprofi} alt="consulta profilaxis"/>
             <img className="consultas" src={consultavacu} alt=" consulta vacunacion"/>
        </div>

    )
}


export default Servicios