let prompt = require("prompt-sync")();

// exemploidade()
function exemploidade(){

    let idade = parseInt(prompt("Digite sua idade: "))

    if(idade >= 120)
    {
        console.log("Idade Inválida")
    }
    else if(idade >= 65 )
    {
        console.log("Teste especial para renovar CNH")
    }
    else if(idade >= 18)
    {
        console.log("Já Pode tirar CNH")
    }
    else 
    {
        console.log("Voce não tem idade para tirar CNH")
    }
    
} 

// login
function login(){

    let usuario = prompt("Digite seu usuário: ")
    let senha = parseInt(prompt("Digite sua senha: ")) 

if (usuario == "admin" && senha == "123")
{
    console.log("Login efetuado com sucesso!!")
}
else
{
    console.log("Usuário ou senha incorretos!!")
} 
}

// exemploResposta()
function exemploResposta(){

    let resposta = prompt("Deseja Cadastrar o débito automatico?")

    if (resposta == "sim" || resposta == "SIM" )
    {
        console.log("Débito cadastrado com sucesso!")
    }
    else
    {
        console.log("Não Será cadastrado...")
    }
}

time()
function time(){

    let time1 = prompt("Digite o nome do time 1: ")
    let time2 = (prompt("Digite o nome do time 2: "))
    let placar1 = parseInt(prompt("Digite o placar do time 1: "))
    let placar2 = prompt("Digite o nome do time 2: ")

    if (placar1 == placar2)
    {
        console.log("EMPATE")
        console.log(time1+placar1+" "+ " X " +" "+placar2+time2)
    }
    else if (placar1 > placar2)
    {
        console.log(time1+ " GANHOU")
        console.log(time1+placar1+" "+ " X " +" "+placar2+time2)
    }
    else if (placar1 < placar2)
    {
        console.log(time2+" GANHOU ")
        console.log(time1+placar1+" "+ " X " +" "+placar2+time2)
    }

}




