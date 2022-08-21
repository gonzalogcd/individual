document.addEventListener("DOMContentLoaded", function(e){
 document.getElementById("boton").addEventListener("click", function() {
     let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;
    let noEstanVacios = true;
    if (email == ""){
        noEstanVacios= false;
        alert("Por favor ingrese su email");
    }  
    if(contrasena== ""){
        noEstanVacios= false;
        alert("Por favor ingrese una contraseña")
    }       
    if (noEstanVacios) {
        window.location = "portada.html";
    }    

 })
})
