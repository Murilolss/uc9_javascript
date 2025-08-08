let prompt = require("prompt-sync")();

let usuarios = [
    { admin: false, nome: "conrado", senha: "1234" },
    { admin: true, nome: "murilo", senha: "1234" },
    { admin: false, nome: "conrado", senha: "1234" },

]

let usuario = null


main()
 function main(){

    console.log("---- Sistema de Login ----")
    let nome = prompt("Digite o Nome: ")
    let senha = prompt("Digite a senha: ")
    autenticar(nome, senha)
    if (usuario.admin == true )
    {
        buscaTodos()
    }
    else
    {
        buscaID(usuario.admin.id)
    }
 }

 function autenticar(nome, senha){

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome == nome && usuarios[i].senha == senha)
        {
            usuario = usuarios[i]
            console.log(`Usuário: ${usuario.nome} autenticado com sucesso`)
        }
    }

    if (usuario == null)
    {
        console.log ("Usuário ou Senha INCORRETOS......")
    }


 }