//configurando babel
console.log("Olá, Mundo!");

// anotações
// var = consegue ser acessada em todo o código
// let e const = só funcionam dentro do escopo onde foram declaradas

// const é "readonly", constant, ma sé possível alterar a propriedade do objeto

//operações em arrays
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(function (number) {
  return number + 1;
});

console.log(numbers);
console.log(newNumbers);

//reduce
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(function (total, next) {
  return total + next;
});

console.log(total);

//filter, find e findIndex
const todo = [
  { text: "1", done: false },
  { text: "2", done: true },
];

const doneTodo = todo.filter(function (todo) {
  return todo.done;
});

const findTodo = todo.find(function (todo) {
  return todo.text == "1";
});

const findIndexTodo = todo.findIndex(function (todo) {
  return todo.text == "1";
});

console.log(doneTodo);
console.log(findTodo);
console.log(findIndexTodo);

// some
const cars = ["hb20", "fusca", "celta"];

const hasFusca = cars.some(function (car) {
  return car == "fusca";
});

console.log(hasFusca);

//arrow function
const todo = [
  { text: "1", done: false },
  { text: "2", done: true },
];

const doneTodo = todo.filter((todo) => todo.done);

console.log(doneTodo);

//parâmetro padrão
function sayHello(name = "Fulano") {
  console.log("Olá" + name);
}

console.log(sayHello);

// strings
const loja = (produto, preco) => {
  console.log(`O ${produto.upperCase} custa ${Math.round(preco)}`);
};

loja("blusa", 10);

// anotações
// se o nome da variável = nome da propriedade, ex name: name, pode colocar só name

//desestruturação de arrays
const fruits = ['laranja', 'uva', 'manga'];
const [a, , c] = fruits; //necessário deixar o espaço vazio pra pegar a laranja e manga (1º e 3º itens) e n o segundo
console.log(a, c);

//desestruturação de objetos
const person = {
    firstName = 'Helen',
    secondName = 'Deuner',
    age: 18,
    address:{
        city: 'Passo Fundo',
        region: 'RS',
    },
};

const {firstName, secondName, addrees: {city}} = person;

console.log(firstName, secondName, city);

//rest, pega o resto de algo, é marcado por reticências
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers; //pode ser rest ou qualquer palavra

console.log(rest); //imprime 3 4 5

//spred, pega o contéudo e expande para outro local, tb é marcado por reticências
const person = {
    firstName = 'Helen',
    secondName = 'Deuner',
    company: 'Compasso',
};

const person2 = {
    ...person, //ou spred, qualquer palavra
    company: 'Random'
}