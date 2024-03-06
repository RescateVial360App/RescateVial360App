//DECLARANDO VARIABLES CON JS


let nombre="Andres Rodriguez"
let email="andresrc2005@gmail"
let text="Cualquier cosa"



let botonContacto=document.getElementById("botoncontacto")
botonContacto.addEventListener("click",function(){

  Swal.fire({
    title: "Bien Hecho!",
    text: "Tu informacion a sido enviada con exito, te estaremos contactando muy pronto!",
    icon: "success"
  });

})


