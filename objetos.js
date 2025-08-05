let prompt = require("prompt-sync")();

let produtos = [
{
    nome: "Taça",
    preco: 25.9,
    descricao: "Feito para colocar coisa"
},

{
    nome: "Copo",
    preco: 14.9,
    descricao: "Feito para colocar coisa igual a taça porém mais barato"
},

{
    nome: "Caneca",
    preco: 22.9,
    descricao: "Feito para colocar coisa igual o copo"
},

]





function teste(){

    let usuario = {
        nome: "Murilo", 
        idade: 18,
        telefones: ["1699887766", "90887766"],
        endereco: {
            rua: "Epsicopal",
            numero: "3200",
            bairro: "Centro"
        }
    }
    
    console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos, o telefone 1 é: ${usuario.telefones[0]} | telefone 2 é: ${usuario.telefones[1]}`)
    console.log(`Rua ${usuario.endereco.rua} Nº ${usuario.endereco.numero} , ${usuario.endereco.bairro}`)
}