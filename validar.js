function validar(){
    var nombre
    nombre = document.getElementById("nombre").value;

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }

    alert(saludo);
}
