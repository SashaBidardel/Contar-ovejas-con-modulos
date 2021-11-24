import { contar } from "./contarOveyas.js";

let btn=document.getElementById("boton");
btn.addEventListener("click",numeroOvejas);

btn.onclick = () => {
    console.log('clicked');
}


function numeroOvejas() {
    
    let num=contar();
    let texto=document.getElementById("resp");
    texto.innerHTML='El número de ovejas son:'+ num;
    console.log("El número de oveyas es:",num);
}   
