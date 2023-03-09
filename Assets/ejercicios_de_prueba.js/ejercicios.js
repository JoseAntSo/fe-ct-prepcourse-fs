console.log (3+5)



function que_color_es(color){
    if(color==='negro' | color==='marron' | color==='azul' | color==='rojo'){
        return 'oscuro';
    } else {
        return 'claro';
    }
}
console.log(que_color_es('verde'));

function operadoresLogicos(num1, num2, num3) {

    if(num1> num2 && num1> num3 && num1>0) return "Numero 1 es mayor y positivo";
    if(num1 < 0|| num2 < 0|| num3 < 0) return "Hay negativos";
    if(num3 > num1 && num3> num2)return num3 + 1;
    if(num1 == 0 && num2 ==0 && num3 == 0) return "Error"
    return false;
}

console.log(operadoresLogicos(2,0,2));