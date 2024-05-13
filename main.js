/**
 * Nullish Coalescing Operator
 *
 * O operador de coalescência nula (??) é um operador lógico que retorna
 * o seu operando do lado direito quando o seu operador do lado esquerdo é
 * null ou undefined. Caso contrário, ele retorna o seu operando do lado
 * esquerdo.
 *
 * Ao contrário do operador lógico OR (||), o operando esquerdo é retornado
 * se houver um valor "falsy" => 0, '', [], false, undefined, null
 *
 */

let idade

idade = 24
console.log('Sua idade é ' + (idade || 'Não informado') + ' anos')
// R= Sua idade é 24 anos

idade = 0 // 0, '', [], false, undefined, null
console.log('Sua idade é ' + (idade || 'Não informado'))
// R= Sua idade é Não informado

idade = 0 // undefined, null
console.log('Sua idade é ' + (idade ?? 'Não informado'))
// R= Sua idade é 0


/**
 * Object
 *
 * O conceito de objetos em JavaScript pode ser entendido com objetos
 * tangíveis da vida real. São basicamente estrutura de dados que
 * podem armasena conjuntos de chave e valor.
 *
 */

let usuario = {
  nome: 'Walisson Aguirra',
  idade: 24,
  endereco: {
    rua: 'Rua teste',
    numero: 123,
  },
}

console.log(usuario)

// Metodos para manipular Objetos

// in => verifica se existe uma "chave" em um objeto
console.log('nome' in usuario) // true
console.log('sobrenome' in usuario) // false

// Object.keys() => retorna um vetor com toda as chaves do objeto
console.log(Object.keys(usuario)) // ['nome', 'idade', 'endereco']

// Object.values() => retorna um vetor com todos os valores do objeto
console.log(Object.values(usuario)) // ['Walisson Aguirra', 24, {...}]

/**
 * Object.entries() => retorna um vetor de vetores
 *
 * [
 *  [
 *    "nome", // O primeiro indice contem o equivalente a chave
 *    "Walisson Aguirra" O segundo indice contem o equivalente a o valor
 *  ],
 *  ...
 * ]
 */
console.log(Object.entries(usuario)) // [["nome", "Walisson Aguirra"], ...]

/**
 * Destructuring Assignment
 *
 * Possibilita extrair dados de arrays ou objetos em variáveis.
 *
 */

let _nome = usuario.nome // nome == 'Walisson Aguirra'
let _idade = usuario.idade // idade == 24
console.log(_nome, _idade)

// Usando desestruturação ficaria:

let { __nome, __idade } = usuario
console.log(__nome, __idade) // nome == 'Walisson Aguirra', idade == 24

let { nome: name, idade: age } = usuario
console.log(name, age) // name == 'Walisson Aguirra', age == 24

let { nome: __name, idade: _age, nickname = 'aguirra24' } = usuario
console.log(nickname) // nickname === 'aguirra24'


/**
 * Rest operator
 */

let { nome, ...rest } = usuario
console.log(nome, rest) // Walisson Aguirra, {idade: 24, endereco: {...}}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [primeiro, segundo, ...restante] = array
console.log(primeiro, segundo, restante) // 1, 2, [3, 4, 5, 6, 7, 8, 9, 10]

let [_primeiro, , terceiro, ..._restante] = array // Pulando o segundo item
console.log(_primeiro, terceiro, _restante) // 1, 3, [4, 5, 6, 7, 8, 9, 10]


/**
 * Short Syntax
 */

let ___nome = "Walisson Aguirra"
let ___idade = 24

let _usuario = {
  ___nome: ___nome,
  ___idade: ___idade
}

console.log(_usuario) // {___nome: 'Walisson Aguirra', ___idade: 24}

// Ficaria

let __usuario = {
  ___nome,
  ___idade
}

console.log(__usuario) // {___nome: 'Walisson Aguirra', ___idade: 24}

/**
 * Optional Chaining
 */

let ___usuario = {
  nome: 'Walisson Aguirra',
  idade: 24,
  endereco: {
    rua: 'Rua teste',
    numero: 123,
    enderecoCompleto() {
      return this.rua + ' - ' + this.numero;
    },
  },
}
console.log(___usuario.endereco?.cep) // undefined
console.log(___usuario.endereco?.enderecoCompleto?.()) // Rua teste - 123

/**
 * Métodos de array
 */

let _array = [1, 2, 3, 4, 5]

for (let item of _array) {
  console.log(item) //  1 2 3 4 5
}

_array.forEach(item => {
  console.log(item) //  1 2 3 4 5
})

let novoArray = _array.map(item => {
  if (item % 2 == 0) {
    return item * 10;
  }

  return item
})
console.log(novoArray) // [1, 20, 3, 40, 5]

let _novoArray = _array.filter(item => item % 2 === 0)
console.log(_novoArray) // 2, 4

let __novoArray = _array
  .filter(item => item % 2 === 0)
  .map(item => item * 10)
console.log(__novoArray) // 20, 40

let todosItensSaoNumeros = _array.every(item => typeof item === 'number')
console.log(todosItensSaoNumeros) // true

let peloMenosUmItemNaoEUmNumero = _array
  .some(item => typeof item === 'number')
console.log(peloMenosUmItemNaoEUmNumero) // false

let par = _array.find(item => item % 2 === 0)
console.log(par) // 2

let index = _array.findIndex(item => item % 2 === 0)
console.log(index) // 1

let soma = _array.reduce((acc, item) => {
  return acc + item
}, 0)
console.log(soma) // 15

/**
 * Template Literals
 */

let _name = null
let message = `Bem-vindo, ${name ? name : 'visitante'}`
console.log(message) // Bem-vindo, visitante

