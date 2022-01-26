let numero = parseInt(prompt('Digite um número para gerar a tabuada:'))
let resultado

for (cont = 1; cont <= 10; cont++){
  resultado += document.write(`${numero} x ${cont} = ${numero * cont}<br>`)
}