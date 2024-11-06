import './barrabusqueda.css';


function Barrabusqueda (){
    return(
        <div>
             <ul className="opciones">
                        <li> <a className="link_opciones" href="registropaciente.html"> Registro</a> </li>
                        <li> <a className="link_opciones" href="consultaregistro.html"> Consulta de registro</a></li>
                        <li> <a className="link_opciones" href="registrocita.html">¡Agenda ya!</a></li>
                        <li> <a className="link_opciones" href="consultarcita.html">Citas programadas</a></li>
             </ul>   
        

        </div>

    )
}

export default Barrabusqueda