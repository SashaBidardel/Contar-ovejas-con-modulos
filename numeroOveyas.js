
function contar() {
    let lista = [
        true, true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true
    ]
    let cont=0;
    
        for (let index = 0; index < lista.length; index++) {
            if (lista[index]==true) {
                cont++;
            }
         }
    return cont;
 }


function numeroOvejas() {
    
    let num=contar();
    let texto=document.getElementById("resp");
    texto.innerHTML='El número de ovejas son:'+ num;
    console.log("El número de oveyas es:",num);
}   
