let nome = prompt('Informe seu nome:')
let idade = parseInt(prompt('Informe sua idade:'))
//console.log(idade)

if (idade >= 18) {
  if (
    nome == 'thomas anderson' ||
    nome == 'Thomas Anderson' ||
    nome == 'THOMAS ANDERSON'
  ) {
    document.write(
      `Olá ${nome}, Você tem ${idade} ano(s), portanto é maior de idade!, e você é personagem do filme The Matrix!`
    )
  } else {
    document.write(
      `Olá ${nome}, Você tem ${idade} ano(s), portanto é maior de idade.`
    )
  }
} else if (idade < 18 && idade >= 0) {
  document.write(
    `Olá ${nome}, Você tem ${idade} ano(s), portanto é menor de idade.`
  )
} else {
  document.write(`Olá ${nome},[ERRO] idade inválida, tente novamente!`)
}
