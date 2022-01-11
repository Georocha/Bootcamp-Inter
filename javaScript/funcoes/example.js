const alunos = [
    {
        nome: 'Geovane',
        nota: 8,
        turma: '2ccp',
    },
    {
        nome: 'João',
        nota: 6,
        turma: '2ccp',
    },
    {
        nome: 'Ana',
        nota: 4,
        turma: '1ccp',
    },
];

const pessoa1 = {
    nome: 'Geovane',
    idade: 26
}

const pessoa2 = {
    nome: 'João',
    idade: 25
}

const pessoa3 = {
    nome: 'Ana',
    idade: 19
}

function alunosAprovados(array, media) {
    let aprovados = [];
    
    for (let i = 0; i < array.length; i ++) {
        
        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

console.log(calculaIdade.call(pessoa1, 30));
console.log(alunosAprovados(alunos, 5));