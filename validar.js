function validar(){
    ingresar = true;
    
    var nombre
    nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        ingresar = false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        ingresar = false;
    }

    var apellidos;
    apellidos = document.getElementById("apellidos").value;

    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        ingresar = false;
    }
    else if (apellidos.length>80){
        alert("El apellido es muy largo");
        ingresar = false;
    }

   var correo;
   correo = document.getElementById("correo").value;

   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if(reg.test(correo) == false){
       alert("Correo incorrecto");
       ingresar = false;
   }
    else if (correo.length>100){
    alert("El correo es muy largo");
        ingresar = false;
    }

    var usuario;
    usuario = document.getElementById("usuario").value;
    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        ingresar = false;
        }
        else if (usuario.length>20){
        alert("El usuario es muy largo");
        ingresar = false;
        }

    var pass;
    pass = document.getElementById("pass").value;
    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        ingresar = false;
        }


    var telefono;
    telefono = document.getElementById("telefono").value;

    if (telefono === ""){
        alert("Todos los campos son obligatorios");
        ingresar = false;
        }
        else if (isNaN(telefono)){
            alert ("debe ser solo numeros");
            ingresar = false;
        }
        else if (telefono.length>15){
            alert("El telefono es muy largo")
            ingresar = false;
        }

    if (ingresar == true){
        alert("Bienvenido "+nombre+"su usuario es "+usuario+" y su contraseña es " +pass);
    }  

return ingresar;
    
}

