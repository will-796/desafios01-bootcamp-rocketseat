programador = {
    nome:"carlos",
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a 
 tecnologia ${programador.tecnologias[0].nome} com especialidade ${programador.tecnologias[0].especialidade}`)

