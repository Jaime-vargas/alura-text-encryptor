//Encriptar / desencriptar texto
function cript(boton){
    var text = document.getElementsByClassName("textoIn")[0].value;
    if(text === ""){
        alert("No se encontro texto para encriptar / desencriptar");
        return;
    }
    else if(boton === "encriptar"){
        //se normaliza texto a minusculas y se quitan acentos en caso de que el usuario los ingresara
        text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
        //se realiza encriptado con los parametros solicitados 
        text = text.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
        
    }else if(boton === "desencriptar"){
        //se normaliza texto a minusculas y se quitan acentos en caso de que el usuario los ingresara
        text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
        //se realiza desencriptado con los parametros solicitados
        text = text.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    }
    elimNoMensaje();
    crearSiMensaje();
    document.getElementsByClassName("textoIn")[0].value = "";
    document.getElementsByClassName("textoOut")[0].value = text;
    manejoDeQuery();
}

//Copiar texto en area de desencriptado
function copiarTexto(){
    var textarea = document.getElementsByClassName("textoOut")[0];
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
}

/**Funcion para ajustar area de texto segun query */
function manejoDeQuery() {
    var ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var textareaIn = document.getElementsByClassName("textoIn")[0];
    var textareaOut = document.getElementsByClassName("textoOut")[0];
    
    if(ancho < 550){
        textareaIn.style.height = "auto";
        textareaIn.style.height = textareaIn.scrollHeight + "px";
        if(textareaOut){
            textareaOut.style.height = "auto";
            textareaOut.style.height = textareaOut.scrollHeight + "px";
        }
    }
    else if(ancho < 950){
        textareaIn.style.height = "auto";
        textareaIn.style.height = "80%";
        if(textareaOut){
            textareaOut.style.height = "auto";
            textareaOut.style.height = textareaOut.scrollHeight + "px";
        }
    }
    else{
        textareaIn.style.height = "auto";
        textareaIn.style.height = "80%";
        if(textareaOut){
            textareaOut.style.height = "auto";
            textareaOut.style.height = "calc(100% - 67px)";
        }
    }
}


/**Funciones para modificar seccion 2 de la pagina*/
function crearNoMensaje(){ 
    var contenedor = document.getElementsByClassName("forma")[0];
    crearImagen(contenedor);
    crearText1(contenedor);
    crearText2(contenedor);    
}
function crearSiMensaje(){
    var contenedor = document.getElementsByClassName("forma")[0];
    crearTxtArea(contenedor);
    crearBtnCopiar(contenedor);
}
function elimNoMensaje(){
    var contenedor = document.getElementsByClassName("forma")[0];
    elimImagen(contenedor);
    elimText1(contenedor);
    elimText2(contenedor);
}
function elimSiMensaje(){
    var contenedor = document.getElementsByClassName("forma")[0];
    elimTxtArea(contenedor);
    elimBtnCopiar(contenedor);
}

/**Funciones eliminar / crear elementos*/
/**Crear elementos*/
function crearImagen(contenedor){
    var imagen = contenedor.querySelector(".personaje");
    if(!imagen){
        imagen = document.createElement("img");
        imagen.classList.add("personaje");
        imagen.src = "images/personaje.png";
        contenedor.appendChild(imagen);
    }
}
function crearText1(contenedor){
    var text1 = contenedor.querySelector(".text1");
    if(!text1){
        text1 = document.createElement("p");
        text1.classList.add("text1");
        text1.textContent = "Ningún mensaje fue encontrado";
        contenedor.appendChild(text1);
    }
}
function crearText2(contenedor){
    var text2 = contenedor.querySelector(".text2");
    if(!text2){
        text2 = document.createElement("p");
        text2.classList.add("text2");
        text2.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        contenedor.appendChild(text2);
    }
}
function crearTxtArea(contenedor){
    var textarea = contenedor.querySelector(".textoOut")
    if(!textarea){
        textarea = document.createElement("textarea");
        textarea.placeholder = "Texto desencriptado";
        textarea.classList.add("textoOut");
        contenedor.appendChild(textarea);
    }
}
function crearBtnCopiar(contenedor){
    var botonCopiar = contenedor.querySelector(".copiar");
    if(!botonCopiar){
        botonCopiar = document.createElement("input");
        botonCopiar.value = "Copiar";
        botonCopiar.type = "submit";
        botonCopiar.addEventListener("click",function(){
            copiarTexto();
        });
        botonCopiar.classList.add("copiar");
        contenedor.appendChild(botonCopiar);
    }
}

/**Eliminar elementos */
function elimImagen(contenedor){
    var imagen = contenedor.querySelector(".personaje");
    if(imagen){
        contenedor.removeChild(imagen);
    } 
}
function elimText1(contenedor){
    var text1 = contenedor.querySelector(".text1");
    if(text1){
        contenedor.removeChild(text1);
    } 
}
function elimText2(contenedor){
    var text2 = contenedor.querySelector(".text2");
    if(text2){
        contenedor.removeChild(text2);
    }
}
function elimTxtArea(contenedor){
    var textarea = contenedor.querySelector(".textoOut");
    if(textarea){
        contenedor.removeChild(textarea);
    }
}
function elimBtnCopiar(contenedor){
    var botonCopiar = contenedor.querySelector(".copiar");
    if(botonCopiar){
        contenedor.removeChild(botonCopiar);
    }
}