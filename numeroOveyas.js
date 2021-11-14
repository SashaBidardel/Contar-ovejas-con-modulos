
import { contar } from "./contarOveyas.js";


function numeroOvejas() {
    
    let num=contar();
    let texto=document.getElementById("resp");
    texto.innerHTML='El número de ovejas son:'+ num;
    console.log("El número de oveyas es:",num);
}   
