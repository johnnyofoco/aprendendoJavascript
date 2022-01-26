document.write("<button onclick='saudacao()'>Olá</button>")

function saudacao () {
  //Recebe o nome e válida
  let nome = prompt('Informe seu nome:')
  if (nome === '') {
    document.write(`<h1>[ERRO] nome não informado, tente novamente!</h1>`)
    //se o nome for válido prossegue
  } else {
    //recebe a idade e válida
    let idade = parseInt(prompt('Informe sua idade:'))
    console.log(typeof idade)
    console.log(idade)
    if (idade <= 0 || isNaN(idade)) {
      document.write(
        `<h1>Olá ${nome},[ERRO] idade inválida, tente novamente!</h1>`
      )
      //se for válida prossegue com o programa
    } else {
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
      } else if (idade >= 0 && idade < 18) {
        document.write(
          `<h1>Olá ${nome}, Você tem ${idade} ano(s), portanto é menor de idade.</h1>`
        )
      }
    }
  }
  document.write("<button onclick='saudacao()'>Olá</button>")
}
