let prompt = require("prompt-sync")();

main()
function main(){
let nome = prompt("Digite seu Nome: ")


if ( nome.length <= 3)
{
    console.log("Nome Curto digite novamente: ")
    main()
    return
}else if(nome.length >3)
{
    idade()
}


}

function idade(){
    
    let idade = prompt("Digite sua idade: ")

    if (idade >= 120 || idade >=18){
        
        cpf()
    }
    else
    {
        console.log("Idade invalida")
    }

}

function cpf(){

    let cpf = prompt("Digite seu CPF: ")

    if (cpf.length < 11 )
    {
        console.log("CPF INVÁLIDO")
    }
    else if(cpf.length > 11)
    {
        console.log("CPF INVÁLIDO")
    }else if(cpf.length == 11)
    {
        email()
    }
}

function email(){

    let email = prompt("Digite seu email: ")

    if (email.includes("@",".") == true)
    {
        senha(senha)
    }
    else
    {
        console.log("Email inválido")
    }
}

function senha(){

    let senha = prompt("Digite sua senha: ")
    
    if(senha.length == 6)
    {
        let confirmar_senha = prompt("confirmar senha: ")
        if (confirmar_senha = senha)
        {
            console.log("Usuário cadastrado com sucesso!!")
        }
    }
    else if(confirmar_senha != senha)
        {
        console.log("Senha incorreta!!")
    }

}



