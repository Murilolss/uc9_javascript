let prompt = require("prompt-sync")();

/*

Ideia do Código

O Código é para um sistema de loja, onde tem lista de produtos, lista de usuários e futuramente possa ter uma lista de clientes,
o usuário comun que seria por exemplo um balconista de loja tem a opção de consultar produtos e listar, enquanto o admin do sistema, 
que poderia ser o dono da loja tem acesso a todas as opções necessarias para administrar o sistema e a loja.

Por conta do tempo ficou faltando algumas funções

*/

let usuarios = [
    
    {nome: "Conrado", senha: "1234", admin: false },
    {nome: "Murilo", senha: "1234", admin: true },
    {nome: "Leandro", senha: "1234", admin: false },
    {nome: "Marcos", senha: "1234", admin: false },
    {nome: "Pedro", senha: "1234", admin: false },

]

 let produtos = [
    
    { id: 1, nome: "Placa Mãe", qtd: 0 , preco: 750, oculto: false, },
    { id: 2, nome: "rtx 3060", qtd: 0, preco: 1300, oculto: false, },
    { id: 3, nome: "Gabinete", qtd: 0, preco: 200, oculto: false, },
    { id: 4, nome: "Memória", qtd: 0, preco: 250, oculto: false, },
    { id: 5, nome: "Mouse", qtd: 0, preco: 240, oculto: true, },

 ]


main()
function main(){

    console.clear()

    console.log("---- Sistema de Consulta ----")
    console.log("\n---- OPÇÕES ----")
    console.log("1 - Login")
    console.log("2 - Cadastro de Usuários")
    console.log("3 - Sair\n")

    let opcao = prompt("Selecione uma opção: ")

    

    if(opcao == "1")
    {
        login()
    }
    else if (opcao == "2")
    {
        cadastradousuario()
    }
    else if (opcao == "3")
    {
        return
    }
    else 
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            main()
        }, 2000);    
    }

}

function login(){

    let usuario = prompt("Digite seu nome: ")
    let senha = prompt("Digite sua senha: ")

    let usuariomin = usuario.toLowerCase()
    

    for (let i = 0; i < usuarios.length; i++) {
        let usuariosmin = usuarios[i].nome.toLowerCase()

        if (usuariomin == usuariosmin && senha == usuarios[i].senha) {
            
            console.log("Login Feito com sucesso!")

            if (usuarios[i].admin == true) {
                telaadmin()
            } else {
                telausuario()
            }

        }
        else if (usuariomin != usuariosmin && senha != usuarios[i].senha) {
            console.log("Usuário ou senha incorretos!")
            prompt("Aperte a tecla ENTER para voltar ao menu de opções.....")
            main() 
    }

    }
}


function telausuario(){

    console.clear()
    
    console.log("---- Sistema de Consulta ----")
    console.log("\n---- OPÇÕES ----")
    console.log("1 - Consultar Produto")
    console.log("2 - Listar Produto ")
    console.log("3 - Sair\n")
    let opcao = prompt("Selecione uma opção: ")

    if (opcao == "1")
    {
        telausuarioconsulta()
    }
    else if (opcao == "2")
    {
        telausuariolista()
    }
    else if (opcao == "3")
    {
        return
    }
    else
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            telaadminconsulta()
        }, 2000); 
    }
}

function telaadmin(){

    console.clear()
    console.log("---- Sistema de Consulta ----")
    console.log("\n---- OPÇÕES ----")
    console.log("1 - Consultar Produto")
    console.log("2 - Listar Produto ")
    console.log("3 - Adicionar Produto ")
    console.log("4 - Desativar Produto ")
    console.log("5 - Ativar Produto ")
    console.log("6 - Editar Produto ")
    console.log("7 - Lista de Produtos desativados ")
    console.log("8 - Sair\n")
    let opcao = prompt("Selecione uma opção: ")

    if (opcao == "1")
    {
       telaadminconsulta()
    }
    else if (opcao == "2")
    {
        telaadminlista()
    }
    else if (opcao == "3")
    {
        addproduto()
    }
    else if (opcao == "4")
    {
        desativarproduto()
    }
    else if (opcao == "5")
    {
        ativarproduto()
    }
    else if (opcao == "6")
    {
        editarproduto()
    }
    else if (opcao == "7")
    {
        listarprotudodesativado()
    }
    else if (opcao == "8")
    {
        return
    }

    else
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            telaadmin()
        }, 1500);    
    }


}

function telausuarioconsulta(){
    console.clear()

    console.log("\n---- OPÇÕES DE BUSCA ----")
    console.log("1 - Lista Completa")
    console.log("2 - Por Nome do Produto")
    console.log("3 - Voltar\n")
    let opcao = prompt("Selecione uma opção: ")

    if (opcao == "1")
    {
      telausuariolista()
    }
    else if (opcao == "2")
    {
        buscaprodutous()
    }
    else if (opcao == "3")
    {
        telausuario()
    }
    else
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            telausuario
        }, 2000); 
    }
}

function telaadminconsulta(){
    console.clear()

    console.log("\n---- OPÇÕES DE BUSCA ----")
    console.log("1 - Por ID")
    console.log("2 - Por Nome do Produto")
    console.log("3 - Voltar\n")
    let opcao = prompt("Selecione uma opção: ")

    if (opcao == "1")
    {
        buscaid()
    }
    else if (opcao == "2")
    {
        buscaprodutoadm()
    }
    else if (opcao == "3")
    {
        telaadmin()
    }
    else
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            telaadminconsulta()
        }, 2000);    
    }
    
}

function buscaid(){

    console.clear()
    
    let buscaid = prompt("Digite o ID do Produto: ")


    for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id == buscaid) {
        console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}\n`) 
       

  
    }
    
}

    
    prompt("Aperte a tecla ENTER para voltar ao menu de opções.....")
    telaadmin()
}

function buscaprodutoadm(){

    console.clear()
    
    let buscaproduto = prompt("Digite o Nome do Produto: ")
    let busca = buscaproduto.toLowerCase()

     
    
    for (let i = 0; i < produtos.length; i++) {
        let produtoatual = produtos[i].nome.toLowerCase()
        
        if (produtoatual.includes(busca) && !produtos[i].oculto) {
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}\n`)
            encontrou = true
        }
    }

    
    
    prompt("Aperte a tecla ENTER para voltar ao menu de opções.....")
    telaadmin()
    
}

function buscaprodutous(){
    
    let buscaproduto = prompt("Digite o Nome do Produto: ")
    let busca = buscaproduto.toLowerCase()

     
    
    for (let i = 0; i < produtos.length; i++) {
        let produtoatual = produtos[i].nome.toLowerCase()
        
        if (produtoatual.includes(busca) && !produtos[i].oculto) {
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}\n`)
            
        }
    }

    
    
    prompt("Aperte a tecla ENTER para voltar ao menu de opções.....")
    telausuario()
    
}

   

function telausuariolista(){
    console.clear()

    console.log("---- PRODUTOS ----\n")

    for (let i = 0; i < produtos.length; i++) {
        if (!produtos[i].oculto) {  
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`)
            
        }
    }

    console.log("\n")
    prompt("Aperte a tecla ENTER para voltar ao menu de opções.....")
    telausuario()
    
}

 

 function telaadminlista(){

     console.clear()

     
     for (let i = 0; i < produtos.length; i++) {
        if (!produtos[i].oculto){ 
        
        console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`) 
        
    
    }
    
}


console.log("\n---- OPÇÕES ----")
console.log("1 - Adicionar Produto")
console.log("2 - Editar Produto ")
console.log("3 - Desativar Produto ")
console.log("4 - Voltar ao Menu\n")
let opcao = prompt("Selecione uma opção: ")
if (opcao == "1")
{
    addproduto()

}
else if (opcao == "2")
{
   editarproduto()
}
else if (opcao == "3")
{
   desativarproduto()
}
else if (opcao == "4")
{
   telaadmin()
}
else
{
    console.log("Opção Inválida Digite novamente.....")
    setTimeout(() => {
    telaadminlista()
    }, 2000);    
}


}


function addproduto(){

    console.clear()
    
    let nome = prompt("Digite o Nome do Produto: ")
    let qtd = prompt("Digite a quantidade do Produto: ")
    let preco = prompt("Digite o Preço do Produto: ")
    
    produtos.push({ id: produtos[produtos.length - 1].id + 1, nome: nome, qtd: qtd, preco: preco, oculto: false,})

console.log("Produto adicionado com sucesso!!")
console.log("Atualizando a Lista..... ")
setTimeout(() => {
    telaadminlista()
}, 2000);


}

function editarproduto(){

    console.clear()

    console.log("---- PRODUTOS ATIVOS ----\n")

    for (let i = 0; i < produtos.length; i++) {
        if (!produtos[i].oculto){ 
        
        console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`) 
        
    
    }
    
}
    console.log("\n")
    let buscaproduto = prompt("Digite o Nome do Produto: ")
    let busca = buscaproduto.toLowerCase()
    
    for (let i = 0; i < produtos.length; i++) {
        let produtoatual = produtos[i].nome.toLowerCase()
        
        if (produtoatual.includes(busca)){

            let novo_nome = prompt("Digite um novo nome/ou mantenha o nome atual: ")
            let nova_qtd = prompt("Digite a Quantidade: ")
            let novo_preco = prompt("Digite o Preço: ")

            produtos[i].nome = novo_nome
            produtos[i].qtd = nova_qtd
            produtos[i].preco = novo_preco
            
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`)
            console.log("Produto editado com sucesso!!")
            console.log("Atualizando a Lista..... ")
            setTimeout(() => {
            telaadminlista()
            }, 2000); 
            
        }
    }

}


function desativarproduto() {
    console.clear()

    console.log("---- PRODUTOS ATIVOS ----\n")

    for (let i = 0; i < produtos.length; i++) {
        if (!produtos[i].oculto){ 
        
        console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`) 
        
    
    }
    
}

    console.log("\n")
    let busca = prompt("Digite o nome do produto para desativar: ").toLowerCase()


    for (let i = 0; i < produtos.length; i++) {
        let nomeProduto = produtos[i].nome.toLowerCase()
        if (nomeProduto.includes(busca) && !produtos[i].oculto) {
            produtos[i].oculto = true
            console.log(`Produto "${produtos[i].nome}" ocultado com sucesso!`)
        }
    }

    

    console.log("Lista sendo atualizada....")
        setTimeout(() => {
            telaadminlista()
        }, 1500);
}

function listarprotudodesativado() {
    console.clear()
    console.log("---- PRODUTOS OCULTOS ----")

    

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].oculto) {
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`)
            
        }  
    }
    
    console.log("\n---- OPÇÕES ----")
    console.log("1 - Ativar Produto")
    console.log("2 - Voltar ao Menu\n")
    let opcao = prompt("Selecione uma opção: ")
    if (opcao == "1")
    {
        ativarproduto()
    
    }
    else if (opcao == "2")
    {
       telaadmin()
    }
    else 
    {
        console.log("Opção Inválida Digite novamente.....")
        setTimeout(() => {
            listarprotudodesativado()
        }, 2000);
    }
}


function ativarproduto() {
    console.clear()
    console.log("---- PRODUTOS OCULTOS ----\n")
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].oculto) {
            console.log(`ID [${produtos[i].id}] - Nome: ${produtos[i].nome} - Quantidade: ${produtos[i].qtd} - Preço: R$ ${produtos[i].preco}`)
            
        }
    }
    
    console.log("---- REATIVAR PRODUTO ----\n")
 
    let busca = prompt("Digite o nome do produto oculto que deseja ativar: ").toLowerCase()
    let encontrou = false
 
    for (let i = 0; i < produtos.length; i++) {
        let nomeProduto = produtos[i].nome.toLowerCase()
 
        if (nomeProduto.includes(busca) && produtos[i].oculto) {
            produtos[i].oculto = false
            encontrou = true
            console.log(`Produto "${produtos[i].nome}" foi ativado com sucesso!`)
        }
        
    }
 
    
    console.log("Lista sendo atualizada.....")
        setTimeout(() => {
            telaadminlista()
        }, 1500);
}

function cadastradousuario(){

    console.clear()

    console.log("---- CADASTRO DE USUÁRIOS ----\n")
    console.log("INTRUÇÕES\n")
    console.log("1 - O Nome deve conter pelo menos 3 caracteres. ")
    console.log("2 - A Senha deve conter pelo menos 6 caracteres. ")
    console.log(`3 - O Email deve conter "@" e "."\n`)

    nomecad()

    
}


function nomecad(){
    let nome = prompt("Digite seu Nome: ")
    
    
    if ( nome.length < 3)
    {
        console.log("Nome Curto digite novamente: ")
        setTimeout(() => {
            cadastradousuario()
        }, 1500);
        return
        
    }else if(nome.length >3)
    {
        
    }

    let email = prompt("Digite seu email: ")
    
    if (email.includes("@",".") == true)
    {
        
    }
    else
    {
        console.log("Email inválido")
    }

    let senha = prompt("Digite sua senha: ")

    if(senha.length < 6){
        console.clear()
        console.log("A senha deve ter pelo menos 6 caracteres. Tente novamente...")
    }

    else if(senha.length >= 6){

    let confirmar_senha = prompt("Confirmar Senha: ")
    if (confirmar_senha = senha)
    {
        console.log("Usuário cadastrado com sucesso!!")
        setTimeout(() => {
            main()
        }, 1500);
        
    }
    }
    
    else if(confirmar_senha != senha)
        {
        console.log("Senha incorreta!!")
    }


        usuarios.push({
            nome: nome,
            senha: senha,
            admin: false,
        })
    
}
      
    