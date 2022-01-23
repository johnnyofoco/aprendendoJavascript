//Variáveis
//string
//var nome = 'Johnny' (var descontinuado)

//number
//var idade = '35'

//let nome = 'Johnny'
/*
const nome = 'Thiago'
nome = 'Vai dar erro'
console.log(nome)
*/

//Tipos de dados
/*
string
number
boolean
array
object
undefined
null
*/

console.log('############## String #############')

//string
let nome = 'Johnny' 
console.log(nome)

//string - concatenada
let sobrenome = 'Marlon'
console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

console.log('')
console.log('############## Number ##############')

//number
let idade = 35
console.log(idade)
console.log(idade + 10)

console.log('')
console.log('############## Float ################')

//float
let porcentagem = 10.2
console.log(porcentagem + '%')

console.log('')
console.log('############## Boolean ##############')

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

console.log('')
console.log('############## Array ################')

//array
let habilidades = ['HTML5', 'CSS3', 'SASS', 'javaScript']
console.log(habilidades)
console.log('Tamanho do array: ' + habilidades.length)
console.log('Item da posição 0 do array é: ' + habilidades[0])

console.log('')
console.log('############## Object ################')

//object
let pessoa = {
  nome: 'Johnny',
  sobrenome: 'Marlon',
  idade: 32,
  habilidades: ['HTML5', 'CSS3', 'SASS', 'javaScript']
}
console.log(pessoa)

//JSON (JAVASCRIPT OBJECT NOTATION)

console.log('')
console.log('############## Undefined ##############')

//undefined
let endereco
console.log(endereco)

console.log('')
console.log('############## Null ###################')

//null
let cidade = null
console.log(cidade)

/*
OPERADORES

adição: +
subtração: -
mutiplicação: *
divisão: /
incremento: ++
decremento: --
*/

console.log('')
console.log('############## Operadores ##############')

//adição: +
let a = 19
let b = 5
let c = a + b
console.log(`(+)Adição: ${a} + ${b} = ${c}`)
//Nan = Not a number

//subtração: -
let d = 19
let e = 5
let f = a - b
console.log(`(-)Subtração: ${d} - ${e} = ${f}`)

//mutiplicação: *
let g = 19
let h = 5
let i = a * b
console.log(`(*)Mutiplicação: ${g} x ${h} = ${i}`)

//divisão: /
let j = 19
let k = 5
let l = a / b
console.log(`(/)Divisão: ${j} / ${k} = ${l}`)

//incremento: ++
let m = 10
m++
console.log(`(++)Incremento: ${m}`)

//decremento: --
let n = 10
n--
console.log(`(--)Incremento: ${n}`)

//atribuição

let o = 1
o = o + 1
o +=1
console.log(`(+=)atribuição: ${o} `)

//Operadores comparativos
/*
 == igualdade de valores sem considerar o tipo
 === igualdade valores e tipos
 !== diferença
 > maior que 
 < menor que 
*/


console.log('')
console.log('####### Operadores Comparativos #########')

let p = 10
let q = '10'
console.log(`(==): ${p} == '${q}':' ${p == q}`)

let r = 10
let s = '10'
console.log(`(===): ${r} === '${s}': ${r === s}`)

let t = 10
let u = '10'
console.log(`(!=): ${t} != '${u}': ${t != u}`)

let w = 10
let y = '10'
console.log(`(!==): ${t} !== '${u}': ${t !== u}`)

let z = 20
let za = '10'
console.log(`(>=): ${z} >= '${za}': ${z >= za}`)

let zb = 20
let zc = '10'
console.log(`(<=): ${zb} <= '${zc}': ${zb <= zc}`)

//Condicionais
/*
  if
  if else
  else if
*/

console.log('')
console.log('####### Condicionais #########')

let idade2 = prompt('Digite a sua idade:')

if (idade2 >= 18) {
  console.log('Ok você é maior de idade')
} else if (idade2 === 15) {
  console.log('Você tem 15 anos')
} else {
  console.log('Você não pode acessar')
}


//Operadores lógicos
/*

*/

console.log('')
console.log('####### Operadores lógicos #########')

let inputNota1 = prompt('Digite a primeira nota:')
let inputNota2 = prompt('Digite a segunda nota:')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) /2
console.log(media)

if (media >= mediaMinima) {
  console.log('Ok, Você foi aprovado')
} else if (media <= mediaMinima) {
  console.log('Infelizmente você foi reprovado')
}

if (media >= mediaMinima && media === 10) {
  console.log('Parabéns, você foi muito bem!')
} else if (media >= mediaMinima && media === 9) {
  console.log('ok, da pra melhorar!')
}

console.log('')
console.log('####### Switch #########')


