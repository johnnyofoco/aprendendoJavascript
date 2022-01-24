/*
for (let contador = 0; contador <= 5000; contador++){
  document.write(`Hello World! ${contador}`)
  document.write('<br>')
}
*/

let opcoes

for (let contador = 1900; contador <= 2021; contador++) {
  opcoes += `<option>${contador}</option>`
}

let selecionar = '<option>-- Selecionar --</option>'

document.write(`<div>
                  <label>Selecione o ano de nascimento:</label>
                  <br>
                  <select>${selecionar} + ${opcoes}</select>
                </div>`)


let lista = ''
                
let clientes = ['Johnny', 'Marlon', 'Eloiza', 'Mastrângelo']

for (let contador = 0; contador < clientes.length; contador++){
  lista += `<li>${clientes[contador]}</li>`
  //console.log(lista)
}
//console.log(lista)

document.querySelector('#listaClientes').innerHTML = lista

