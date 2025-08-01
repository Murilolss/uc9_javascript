// MENU DE SISTEMA
let prompt = require("prompt-sync")();

let nome = ""
let idade = 0
let ativo = false

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
    setTimeout(() => {
        main()
    }, 2000);
    ativo = true
}


function listar(){
    console.log("---- LISTAGEM ----")
    console.log("O Nome é: "+nome)
    console.log("Idade: "+idade)
    console.log("Status: ")
    document.addEventListener("keyup", (e)=>{
        if(e.key == "Return"){
            main()
        }
    })
    
    if(opcao == "1"){
        setTimeout(() => {
            main()
        }, 2000);
    }
}


