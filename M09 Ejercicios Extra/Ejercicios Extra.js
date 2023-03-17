/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arraygrande=[];
   for(let propiedad in objeto){
      var array_par=[propiedad,objeto[propiedad]];
      arraygrande.push(array_par);
   }
   return  arraygrande;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto_cantidad={};
   for(let i=0;i<string.length;i++){
      var letra= string[i];
      if(objeto_cantidad.hasOwnProperty(letra)){
         objeto_cantidad[letra] +=1;
      } else {
         objeto_cantidad[letra] = 1;
      }
   }
   var objeto_ordenado = {};
   var array_para_ordenar = Object.keys(objeto_cantidad).sort();
   for(let i=0;i<array_para_ordenar.length;i++){
      var letra_ayuda = array_para_ordenar[i];
      objeto_ordenado[letra_ayuda]=objeto_cantidad[letra_ayuda];
   }
   return objeto_ordenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayus = "";
   let minus = "";
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
          mayus += string[i];
     } else {
          minus += string[i];
     }
   }
   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var partes_de_la_frase = frase.split(' ');
   let palabrasInvertidas = partes_de_la_frase.map(palabra => palabra.split('').reverse().join(''));
   return palabrasInvertidas.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero_prueba= numero.toString();
   var numero_invertido = numero_prueba.split('').reverse().join('');
   if(numero == numero_invertido){
      return 'Es capicua';
   } else {
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras_eliminadas='';
   for(let i=0;i<string.length;i++){
      if((string[i] !== 'a') && (string[i] !== 'b') && (string[i] !=='c')){
         letras_eliminadas += string[i];
      }
   }
   return letras_eliminadas;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
    
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevo_array=[];
   for(let i=0;i<array1.length;i++){
      for(let j=0;j<array2.length;j++){
         if(array1[i]==array2[j]){
            nuevo_array.push(array1[i]);
         }
      }
   }
   return nuevo_array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
