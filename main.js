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

let { nome: _name, idade: _age, nickname = 'aguirra24' } = usuario 
console.log(nickname) // nickname === 'aguirra24'
