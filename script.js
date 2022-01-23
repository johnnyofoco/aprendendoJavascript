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