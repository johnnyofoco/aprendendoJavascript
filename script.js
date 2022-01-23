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


//string
let nome = 'Johnny' 
console.log(nome)

//string - concatenada
let sobrenome = 'Marlon'
console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

//number
let idade = 35
console.log(idade)
console.log(idade + 10)

//float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['HTML5', 'CSS3', 'SASS', 'javaScript']
console.log(habilidades)
console.log('Tamanho do array: ' + habilidades.length)
console.log('Item da posição 0 do array é: ' + habilidades[0])

//object
let pessoa = {
  nome: 'Johnny',
  sobrenome: 'Marlon',
  idade: 32,
  habilidades: ['HTML5', 'CSS3', 'SASS', 'javaScript']
}
console.log(pessoa)

//JSON (JAVASCRIPT OBJECT NOTATION)

//undefined
let endereco
console.log(endereco)


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
console.log(m)

//decremento: --
let n = 10
n--
console.log(n)


