let nome = prompt('Informe seu nome:')
let idade = parseInt(prompt('Informe sua idade:'))
//console.log(idade)

if (idade >= 18) {
  document.write(`Olá ${nome}, Você tem ${idade} ano(s), portanto é maior de idade.`)
  console.log(idade)
} else if ( (idade < 18) && (idade >= 0) ){
  document.write(`Olá ${nome}, Você tem ${idade} ano(s), portanto é menor de idade.`)
  console.log(idade)
} else {
  document.write(`Olá ${nome},[ERRO] idade inválida, tente novamente!`)
  console.log(idade)
}
