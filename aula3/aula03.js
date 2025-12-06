// Diferença entre var, let e const
"use strict"

{
    var idade = 30;
    console.log(idade); // Funciona (30)
}
// Fora do bloco...
console.log(idade); // Funciona (30) TAMBÉM! 
// Isso pode causar confusão ou sobrescrever variáveis que você não queria.


{
    let nome = "João";
    console.log(nome); // Funciona ("João")
}
// Fora do bloco...
console.log(nome); // ERRO! ReferenceError: nome is not defined
// Isso é bom, pois torna seu código mais organizado e seguro.

const pi = 3.14159;
console.log(pi); // 3.14159

// Tentar mudar o valor:
pi = 3.2; // ERRO! TypeError: Assignment to constant variable.
