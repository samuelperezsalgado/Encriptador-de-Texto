function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let figura = document.getElementById("muneco");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imas")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado correctamente";
        parrafo.textContent = "";
        muneco.src ="./imagen/Cajasiete_Itop_ideas.png";
    }else{
        muneco.src = "./imagen/muneco.svg";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debe de ingresar un texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imas/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado correctamente";
        parrafo.textContent = "";
        muneco.src ="./imagen/Cajasiete_Itop_ideas.png";
    }else{
        muneco.src = "./imagen/muneco.svg";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debe de ingresar un texto");
 }
}