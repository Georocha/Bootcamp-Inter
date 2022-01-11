//IF-ELSE
function numPositivo(num) {
    let resultado;
    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

function numPositivo(num) {
    const numNegativo = num < 0;
    if (numNegativo) {
        return false;
    }

    return true;
}

function numeroPositivo(numero) {
    const EH_NEGATIVO = numero < 0;
    const MAIOR_QUE_DEZ = numero > 10;

    if (EH_NEGATIVO) {
        return "é um número negativo";
    } else if (!EH_NEGATIVO && MAIOR_QUE_DEZ) {
        return "é um número positivo e maior que 10"
    }

    return "é um número positivo";
}

//SWITCH-CASE  - Equivale a uma comparação de tipo e valor (===)) - Sempre precisa de um valor "default" - ideal para comparar muitos valores

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2: 
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "frango";
    }
}
getAnimal(1) //cão
getAnimal(3) // pássaro
getAnimal("1") //frango

// FOR - loop dentro de elementos iteráveis (arrays, strings)

function multPorDois(array) {
    let multiplicados = [];

    for(let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }

    return multiplicados;
}

const MEUS_NUMEROS = [2, 26, 17, 33, 716, 19];
console.log(multPorDois(MEUS_NUMEROS));

//FOR...in - Loop entre propriedades enumeráveis de um objeto

function forInExemplo(objeto) {
    for(propriedades in objeto) {
        console.log(propriedades);
    }
}
const MEU_OBJETO = {
    nome: "Geovane",
    idade: "26",
    cidade: "Itabaiana"
}

forInExemplo(MEU_OBJETO);
// nome
// idade
// cidade

function forInExemplo(objeto) {
    for(propriedades in objeto) {
        console.log(objeto[propriedades]);
    }
}
const MEU_OBJETO = {
    nome: "Geovane",
    idade: "26",
    cidade: "Itabaiana"
}

forInExemplo(MEU_OBJETO);
// Geovane
// 26
// Itabaiana

// FOR...of - Loop entre estruturas iteráveis (arrays, strings)

function logLetras(PALAVRA) {
    for(letra of PALAVRA) {
        console.log(letra);
    }
}

const PALAVRA = "goiaba";
// g
// o
// i
// a
// b
// a

function logNumeros(NUMS) {
    for(num of NUMS) {
        console.log(num);
    }
}
const NUMS = [30, 20, 233, 2];
logNumeros(NUMS)

//WHILE -----------------------

function exemplo() {
    let numero = 0;

    while(numero <= 5) {
        console.log(numero);
        numero++;
    }
}
exemplo()

//DO -WHILE ---------------------

function exemploDo() {
    let num = 6;

    do {
        console.log(num);
        num++
    } while(num <= 5)
}
exemploDo() // 6