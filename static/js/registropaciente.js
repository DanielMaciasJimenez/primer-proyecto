function registro_cliente(){
    
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let cedula= document.getElementById("c_id").value
    let n_mascota = document.getElementById("n_pet").value
    let animal = document.getElementById("t_animal").value
    let edad = document.getElementById("age").value
    let numero = document.getElementById("phone").value
    let correo = document.getElementById("e_mail").value

    let confirm_texto= false
    let confirm_numeros= false
   
    let confir_vacio = validar_vacio(nombre, apellido , cedula, n_mascota, animal, edad, numero, correo)
   
   if (confir_vacio){
        let confirmar_nombre = validar_texto(nombre)
        let confirmar_apellido = validar_texto(apellido)
        let confirmar_mascota = validar_texto(n_mascota)
        let confirmar_animal = validar_texto(animal)
        let confirmar_cedula = validar_numeros(cedula)
        let confirmar_celular = validar_numeros(numero)
       
       
       
        if (confirmar_nombre && confirmar_apellido && confirmar_mascota && confirmar_animal){ 
           confirm_texto = true;
        }
        else {
            alert("Los campos:Nombre, Apellido, Mascota y Animal deben estar sin números")
        }


        if(confirmar_cedula&&confirmar_celular){
            confirm_numeros = true
            }
           
            else{
                alert("Los campos de Cédula y Número no pueden llevar letras ni caracteres especiales")
        
            } 
    
               /*REVISAR POSIBLE ERROR POR LA CREACION DE CONFIRM_NUMEROS*/
        if (confirm_texto && confirm_numeros){
            alert("Usuario fue creado correctamente")
        }

        else{
            alert("Error al crear usuario")
        }
    
    }

  
       


}




 function validar_vacio(nombre, apellido , cedula, n_mascota, animal, edad, numero, correo) {
  let confir_vacio= true
    
   if (nombre =="")  {
   alert("Debe completar su nombre")
   confir_vacio= false
 }

   if (apellido == ""){
        alert("Debe completar su apellido")
        confir_vacio= false
   }

    if (cedula == ""){
        alert("Debe completar su cédula")
        confir_vacio= false
    
    }

    if(n_mascota== ""){
        alert("Debe completar su nombre de tu mascota")
        confir_vacio= false

    }   

    if(animal==""){
        alert("Debe completar el tipo de animal que tiene")
        confir_vacio= false
    }

    if(edad==""){
        alert("Debe completar la edad del su mascota")
        confir_vacio= false
    }

    if(numero==""){
        alert("Debe completar su número de contacto")
        confir_vacio= false
    }


    if(correo==""){
        alert("Debe completar su correo electrónico")
        confir_vacio= false
    }

    return confir_vacio
   
 }

 function validar_texto (texto_campo) {
 
    let confirm_texto = true;
    let Array_texto = Array.from(texto_campo);

    for (let i = 0; i < Array_texto.length; i++) {
        if (
            Array_texto[i] == '0' || Array_texto[i] == '1' || Array_texto[i] == '2' || Array_texto[i] == '3' || Array_texto[i] == '4' || Array_texto[i] == '5' || Array_texto[i] == '6' || Array_texto[i] == '7' || Array_texto[i] == '8' || Array_texto[i] == '9'
        ) {
            confirm_texto = false;
            break;
        }

        
    }

    return confirm_texto
 }


function validar_numeros(numero_campo) {
    let confirm_numeros = true
    let array_numer = Array.from(numero_campo)


    for(let i=0; i<array_numer.length; i++){
        if( array_numer[i] == '0' || array_numer[i] == '1' || array_numer[i] == '2' || array_numer[i] == '3' || array_numer[i] == '4' || array_numer[i] == '5' || array_numer[i] == '6' || array_numer[i] == '7' || array_numer[i] == '8' || array_numer[i] == '9'){


        }
        else{
            confirm_numeros = false
            break
        }
       
    }
    return confirm_numeros
}



