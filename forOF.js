let clientes = [
  {
    nome: 'Johnny',
    idade: 32,
    linguagens: ['javaScript', 'python', 'php']
  },
  {
    nome: 'Fulano',
    idade: 25,
    linguagens: ['C#', 'c++', 'c']
  },
  {
    nome: 'Cicliano',
    idade: 32,
    linguagens: ['go', 'closure', 'r']
  }
]

let htmlClientes = ''

for (let cliente of clientes) {
  let listaLinguagens = ''

  for (linguagem of cliente.linguagens) {
    listaLinguagens += `<li>${linguagem}</li>`
  }

  htmlClientes += `
  <li>
    <b>Nome:</b> ${cliente.nome}<br>
    <b>Idade:</b> ${cliente.idade}<br>
    <b>Linguagens:</b><br>
    <ul>
      ${listaLinguagens}
    </ul>
  </li>  
  `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes
