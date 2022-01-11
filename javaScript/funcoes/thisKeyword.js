// This - Se refere ao objeto ao qual pertence a propriedade
const pessoa = {
    firstName: "Geovane",
    lastName: "Rocha",
    id: 1995,
    fullName: function() {
        return this.firstName + " " + this.lastName // This em um método - 
    }
};

//this Alone, sozinho
//quando usado sozinho, o proprietário é o objeto global
// no modo estrito também
let x = this;

// this em uma Função (default)
// então, quando usado em uma função, em strict mode, this é undefined.
function myFunction() {
    return this;
}

//this em Manipuladores de Eventos
<html>
<body>
<h2>the JavaScript <i>this</i> keyword</h2>
<button onclick="this.style.display='none'">
    Click here to remove me!
</button>
</body>
</html>

//Vinculação de método de objeto-------------------------------------
//O objeto pessoa é o "dono" da função
const pessoa = {
    firstName : "Geovane",
    lastName: "Rocha",
    id: 1995,
    myFunction: function() {
        return this;
    }
}

//Ligação de função explícita-----------------------------------------
//Os métodos call () e apply () são métodos JavaScript predefinidos.
// Ambos podem ser usados ​​para chamar um método de objeto com outro objeto como argumento.
const pessoa1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const pessoa2 = {
    firstName:"John",
    lastName: "Doe",
  }
  pessoa1.fullName.call(pessoa2);  // Will return "John Doe" 