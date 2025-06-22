
document.querySelector("#btnNombre").addEventListener("click", IngresarNombre)

document.querySelector("#btnContinuar1").addEventListener("click", continuarProximo) 

document.querySelector("#btnContinuar2").addEventListener("click", continuarProximo2) 
document.querySelector("#btnContinuarApellidoTrue").addEventListener("click", ContinuarApellido) 
document.querySelector("#btnPerroNombre").addEventListener("click", IngresarPerro) 





function IngresarPerro(){
    let perro =  document.querySelector("#txtPerroNombre").value.toLowerCase().trim()

    if( perro == "oplur"){
          document.querySelector("#pantallaAravenaTrue").style.display = "none"
          document.querySelector("#carta").style.display = "block"

    }else{
          document.querySelector("#pantallaAravenaTrue").style.display = "none"
          document.querySelector("#error").style.display = "block"

    }
}

function ContinuarApellido(){
     let select = document.querySelector("#slcApellido").value

     if(select == "Si"){
         document.querySelector("#pantallaApellidoTrue").style.display = "none"
             document.querySelector("#pantallaAravenaTrue").style.display = "block"
                }else{
         document.querySelector("#error").style.display = "block"
          document.querySelector("#pantallaApellidoTrue").style.display = "none"

    }

     }
     
function continuarProximo(){
    document.querySelector("#pantallaBienvenidoTrue").style.display = "none"
     document.querySelector("#pantallaApellido").style.display = "block"
      
}

function IngresarNombre(){
    let nombre = document.querySelector("#txtNombre").value.toLowerCase().trim()


    if(nombre == "alexander"){
             document.querySelector("#pantallaBienvenido").style.display = "none"
          document.querySelector("#pantallaBienvenidoTrue").style.display = "block"
         
    }else{
         document.querySelector("#pantallaBienvenido").style.display = "none"
        document.querySelector("#pantallaBienvenidoFalse").style.display = "block"
    }
}

function continuarProximo2(){
    let inicial =  document.querySelector("#txtApellido").value.toLowerCase().trim()

    if(inicial == "a"){
 document.querySelector("#pantallaApellido").style.display = "none"
    document.querySelector("#pantallaApellidoTrue").style.display = "block"
    }else{
         document.querySelector("#error").style.display = "block"
          document.querySelector("#pantallaApellido").style.display = "none"

    }
}


ocultarTodo()

function ocultarTodo(){
    document.querySelector("#pantallaBienvenido").style.display = "block"
    document.querySelector("#pantallaBienvenidoTrue").style.display = "none"
    document.querySelector("#pantallaBienvenidoFalse").style.display = "none"
    document.querySelector("#pantallaApellido").style.display = "none"
    document.querySelector("#error").style.display = "none"
    document.querySelector("#pantallaApellidoTrue").style.display = "none"
    document.querySelector("#pantallaAravenaTrue").style.display = "none"
    document.querySelector("#carta").style.display = "none"

}

