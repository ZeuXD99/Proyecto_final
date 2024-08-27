const entradaTexto = document.getElementById("entradaTexto");
const botonEncriptador = document.getElementById("botonEncriptador");
const botonDesencriptador = document.getElementById("botonDesencriptador");
const botonCopiar = document.getElementById("botonCopiar");
const conversionTexto = document.getElementById("conversionTexto");
const imagenReferencia = document.getElementById("imagenReferencia");
const parrafoDos = document.getElementById("parrafoDos");
 
let reemplazar =[
    ["a","fadsa"], 
    ["e","caviu"],
    ["i","siusi"],
    ["o","damed"],
    ["u","tropsd"],
]

botonEncriptador.addEventListener("click", () => {
    const entrada = entradaTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    const entradaEncriptada = encriptar(entrada)

    conversionTexto.innerHTML = entradaEncriptada;

    imagenReferencia.style.display = "none";
    parrafoDos.style.display="none";
    botonCopiar.style.display = "block";
    zonaResultados.classList.add("ajustes");
    conversionTexto.classList.add("ajustes");
})

botonDesencriptador.addEventListener("click", () => {
    const entrada = entradaTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(entrada);

    conversionTexto.innerHTML = textoDesencriptado;

    imagenReferencia.style.display = "none";
    parrafoDos.style.display="none";
    botonCopiar.style.display = "block";
    zonaResultados.classList.add("ajustes");
    conversionTexto.classList.add("ajustes");
}) 

botonCopiar.addEventListener("click", () =>{
    let texto = entradaTexto;
    navigator.clipboard.writeText(texto.value);
})