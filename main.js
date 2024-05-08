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