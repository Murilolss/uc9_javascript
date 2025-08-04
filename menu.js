// MENU DE SISTEMA
let prompt = require("prompt-sync")();

let nome = ""
let idade = 0
let ativo = false
let nomes = []
let idades = []




main()
function main(){

    console.clear()
    
    console.log("---- ORDEM DE SERVIÇO ----")
    console.log("[1] - Cadastrar")
    console.log("[2] - Listar usuários")
    console.log("[3] - Sair")
    console.log("--------------------------")
    
    let opcao = prompt("Digite uma opção: ")
    
    
    
    if(opcao == "1"){
        cadastro()
        main()
        return
    }
    else if (opcao == "2")
        {
            listar()
        }
        else if (opcao == "3")
            {
                return
            }
        else 
        {
            console.log("OPÇAÕ INVÁLIDA")
            setTimeout(() => {
                main()
            }, 2000);
            
        

    }
}


function cadastro(){
    console.log("---- CADASTRO ----")
    nome = prompt("Digite seu Nome: ")
    idade = parseInt(prompt("Digite sua idade: "))
    ativo = true
    setTimeout(() => {
        main()
    }, 2000);
}


function listar(){
    console.clear()
    console.log("---- LISTAGEM ----")
    // console.log("Nome: "+nome)
    // console.log("Idade: "+idade)

    // INTERPOLAÇÃO
    
    if (nome == ""){
        console.log("NENHUM USUÁRIO CADASTRADO AINDA....")
        setTimeout(() => {
            main()
        }, 2000);
        return
        
    }
   
    console.log(`1 - Nome: ${nome} idade: ${idade} Status: ${ativo}`)

    console.log(prompt("\nPressione ENTER para voltar ao menu..."))
    main()
    return
    
    
}
