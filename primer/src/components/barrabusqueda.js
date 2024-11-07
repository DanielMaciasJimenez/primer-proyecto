import './barrabusqueda.css';
import { Link } from 'react-router-dom'


function Barrabusqueda (){
   
   
    function View_regispaciente(){
        window.location="/regis_paciente"
    }

    function View_consulpaciente(){
        window.location =  "/consul_paciente"
    }
    
    function View_regiscita(){
        window.location =  "/regis_cita"
    }

    function View_consulcita(){
        window.location =  "/consul_cita"
    }



    
    
    
    return(
        <div>
             <ul className="opciones">
                        <li> <button onClick={View_regispaciente} className="link_opciones" href="/components/regis_paciente.js"> Registro</button>  </li>
                        <li> <button onClick={View_consulpaciente} className="link_opciones" href="consultaregistro.html"> Consulta de registro</button> </li>
                        <li> <button onClick={View_regiscita} className="link_opciones" href="registrocita.html">¡Agenda ya!</button></li>
                        <li> <button onClick={View_consulcita} className="link_opciones" href="consultarcita.html">Citas programadas</button> </li>
             </ul>   
        

        </div>

    )
}

export default Barrabusqueda