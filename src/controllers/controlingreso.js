//DECLARANDO VARIABLES CON JS


let placaBaseDatos="ABC123"
let ciudadBaseDatos="Medellin"
let cedulaBaseDatos="123"

let botonFormularioGl=document.getElementById("botonIngresoGl")
let botonFormularioGm=document.getElementById("botonIngresoGm")
let botonFormularioGf=document.getElementById("botonIngresoGf")


let cajaFormularioPlaca=document.getElementById("placa")
let cajaFormularioCiudad=document.getElementById("ciudad")
let cajaFormularioCedula=document.getElementById("cedula")

//DETECTANDO EVENTOS CON JS


botonFormularioGl.addEventListener("click",function(evento){

   evento.preventDefault()

   //1.capturamos la informacion del formulario
  let placaUsuario=cajaFormularioPlaca.value  
  let ciudadUsuario=cajaFormularioCiudad.value 
  let cedulaUsuario=cajaFormularioCedula.value

  //Validando los datos del usuario
  if(placaBaseDatos==placaUsuario &&ciudadBaseDatos==ciudadUsuario &&cedulaBaseDatos==cedulaUsuario ){
   Swal.fire({
       title: "Bienvenido "+placaUsuario,
       text: "Tus datos son correctos",
       icon: "success"
     })

     setTimeout(function(){
      sessionStorage.setItem("nombre",placaUsuario)
      window.location.href="./taller.html"// ruta 
     },2000)

     

  }else{
       Swal.fire({
       icon: "error",
       title: "Oops..."+placaUsuario+ "tienes problemas",
       text: "Verifica tus credenciales",
       
     });

  }
})

botonFormularioGm.addEventListener("click",function(evento){

  evento.preventDefault() 

  //1.capturamos la informacion del formulario
 let placaUsuario=cajaFormularioPlaca.value  
 let ciudadUsuario=cajaFormularioCiudad.value 
 let cedulaUsuario=cajaFormularioCedula.value

 //Validando los datos del usuario
 if(placaBaseDatos==placaUsuario &&ciudadBaseDatos==ciudadUsuario &&cedulaBaseDatos==cedulaUsuario ){
  Swal.fire({
      title: "Bienvenido "+placaUsuario,
      text: "Tus datos son correctos",
      icon: "success"
    })

    setTimeout(function(){
      window.location.href="./taller.html"// ruta 
     },2000)

 }else{
      Swal.fire({
      icon: "error",
      title: "Oops..."+placaUsuario+ "tienes problemas",
      text: "Verifica tus credenciales",
      
    });

 }
})


botonFormularioGf.addEventListener("click",function(evento){

   evento.preventDefault() 

   //1.capturamos la informacion del formulario
  let placaUsuario=cajaFormularioPlaca.value  
  let ciudadUsuario=cajaFormularioCiudad.value 
  let cedulaUsuario=cajaFormularioCedula.value

  //Validando los datos del usuario
  if(placaBaseDatos==placaUsuario &&ciudadBaseDatos==ciudadUsuario &&cedulaBaseDatos==cedulaUsuario ){
   Swal.fire({
       title: "Bienvenido "+placaUsuario,
       text: "Tus datos son correctos",
       icon: "success"
     })

     setTimeout(function(){
      window.location.href="./grua.html"// ruta 
     },2000)

   

  }else{
       Swal.fire({
       icon: "error",
       title: "Oops..."+placaUsuario+ "tienes problemas",
       text: "Verifica tus credenciales",
       
     });

  }
})

//*cajaFormularioCiudad.addEventListener("click", function(){alert("digite su Ciudad")})
//cajaFormularioPlaca.addEventListener("click", function(){alert("digite su Placa")})
//cajaFormularioCedula.addEventListener("click", function(){alert("digite su Cedula")})


