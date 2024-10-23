function registro_cliente(){
    
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let cedula= document.getElementById("c_id").value
    let n_mascota = document.getElementById("n_pet").value
    let animal = document.getElementById("t_animal").value
    let edad = document.getElementById("age").value
    let numero = document.getElementById("phone").value
    let correo = document.getElementById("e_mail").value

 
    validar_texto(nombre, apellido , cedula, n_mascota, animal, edad, numero, correo)
   
        
  
 }


 function validar_texto(nombre, apellido , cedula, n_mascota, animal, edad, numero, correo) {
     if (nombre =="")  {
   alert("Debe completar su nombre")
 }

   if (apellido == ""){
        alert("Debe completar su apellido")
   }

    if (cedula == ""){
        alert("Debe completar su cédula")
    
    }

    if(n_mascota== ""){
        alert("Debe completar su nombre de tu mascota")

    }   

    if(animal==""){
        alert("Debe completar el tipo de animal que tiene")
    }

    if(edad==""){
        alert("Debe completar la edad del su mascota")
    }

    if(numero==""){
        alert("Debe completar su número de contacto")
    }


    if(correo==""){
        alert("Debe completar su correo electrónico")
    }


 }

 






