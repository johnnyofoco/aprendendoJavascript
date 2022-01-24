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

for (let cliente of clientes) {
  console.log(cliente)
}