document.write("<button onclick='saudacao()'>Olá</button>")

function saudacao() {
  let nome = prompt('Informe seu nome:')
  let idade = parseInt(prompt('Informe sua idade:'))
  //console.log(idade)
  
  document.write("<button onclick='saudacao()'>Olá</button>")

  if (idade >= 18) {
    if (
      nome == 'thomas anderson' ||
      nome == 'Thomas Anderson' ||
      nome == 'THOMAS ANDERSON'
    ) {
      document.write(
        `<h1>Olá ${nome}, Você tem ${idade} ano(s), portanto é maior de idade!</h1>
         <h2>Você é personagem do filme The Matrix!</h2>`
      )
    } else {
      document.write(
        `<h1>Olá ${nome}, Você tem ${idade} ano(s), portanto é maior de idade.</h1>`
      )
    }
  } else if (idade < 18 && idade >= 0){
    document.write(
      `<h1>Olá ${nome}, Você tem ${idade} ano(s), portanto é menor de idade.</h1>`
    )
  } else {
    document.write(`<h1>Olá ${nome},[ERRO] idade inválida, tente novamente!</h1>`)
  }
}
