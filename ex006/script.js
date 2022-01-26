let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix'
  },

  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI'
  },
  
  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início'
  },

  {
    nome: 'Johnny Deep',
    personagem: 'Capitão Sparrow',
    filme: 'Piratas do caribe'
  },

  {
    nome: 'Wagner Moura',
    personagem: 'Capitão Nascimento',
    filme: 'Tropa de elite'
  },

  {
    nome: 'Jack Black',
    personagem: 'JB',
    filme: 'Tenacious D uma dupla infernal'
  }
]

for (let c = 0; c < listaAtores.length; c++) {
  let ator = listaAtores[c]
  document.querySelector('.container').innerHTML += `<div class="box box${c +
    1}">
                    <h1>${ator.nome}</h1>
                    <p>
                        Interpreta o personagem ${ator.personagem} 
                        no filme ${ator.filme}
                    </p>
                 </div>`
}
