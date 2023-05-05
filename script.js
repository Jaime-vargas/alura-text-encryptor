// Todo el HTML debe estar cargado antes de ejecutar la funcion
document.addEventListener("DOMContentLoaded", function() {
    
    manejoDeQuery();
    crearNoMensaje();
    
    // Capturar el evento keydown para la tecla "Enter" en el textarea
    var textareaIn = document.getElementsByClassName("textoIn")[0]
    textareaIn.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        cript('encriptar');
      }
    });

    // Detectar cuando textarea de texto desencriptado se vacie y pierda el foco
    document.addEventListener("focusout", function(event) {
    var textarea = event.target;
    if (textarea.classList.contains("textoOut") && textarea.value === "") {
        elimSiMensaje();
        crearNoMensaje();
    }
    });

    // monitorear ancho de pantalla para ajustar texto de acuerdo al media query
    window.addEventListener("resize", function(){
      manejoDeQuery();
    });

    textareaIn.addEventListener("input", function(){
      manejoDeQuery();
    });
    
});

    
