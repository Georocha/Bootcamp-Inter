// FUNÇÃO ANÔNIMA
const SUM = function (a,b){
    return a + b;
}
console.log(SUM(1,2));
SUM(2,4);

//FUNÇÃO AUTOINVOCÁVEL
(
    function(a,b) {
        return a + b;
    }
)(1,2); //3

const SOMA_3 = (
    function() {
        return a + b;
    }
)(1,2);

console.log(SOMA_3)

//CALLBACKS "Uma função passada como argumento para outra"

const CALC = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const SOMA = function(num1, num2) {
    return num1 + num2;
}

const SUB = function(num1, num2) {
    return num1 - num2;
}

const RESULT_SOMA = CALC(SOMA, 1,2);
const RESULT_SUB = CALC(SUB, 1,2);

console.log(RESULT_SOMA);
console.log(RESULT_SUB);

//ARROW FUNCTIONS------------------>

//antes:
hello = function() {
    return "Hello world!";
}
//com Arrow:
hello = () => {
    return "Hello world!";
}
//com uma condição:
hello = () => "Hello world!";

//Com Parâmetros:
hello = (val) => "Hello" + val;


