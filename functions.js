/*
function escreverNoConsole(mensagem = '', nome = '') {
  console.log(`Olá ${nome}, ${mensagem}`)
}

escreverNoConsole('Seja muito bem vindo(a)', 'Thiago')
*/

function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(10, 5))

function milhasEmKm(milhas) {
  let km = milhas * 1.6
  return km
}

let resultado = milhasEmKm(150)
document.write(`O resultado é: ${resultado} km`)