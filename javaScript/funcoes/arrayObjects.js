//ARRAYS
// Spread: forma de lidar separadamente com elementos

function sum(x, y, z) {
    return x + y + z;
}
const NUMBERS = [1, 2, 3];
console.log(sum(...NUMBERS));

// Rest : combina os argumentos em um array

function confereTamanho(...args) {
    console.log(args.length)
}
confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

/*---------------------------------*/
// -----------OBJETOS---------------
// Object Destructuring
const USER = {
    id: 42,
    displayName: 'Geovane',
    fullName: {
        firstName: 'Geovane',
        lastName: 'Rocha'
    }
};

function userId(id) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(USER))
console.log(getFullName(USER))