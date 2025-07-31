let prompt = require("prompt-sync")();


// atividadeNome()
function atividadeNome(){

    let nome = prompt("Digite o Seu nome: ")
    let sobrenome = prompt("Digite o sobrenome: ")
    let nome_completo = nome+" "+sobrenome
    console.log("Seja Bem-Vindo(a) "+nome_completo)
    
}

// atividadeIdade()
function atividadeIdade(){

let idade = parseInt (prompt("Digite a sua idade: "))
let idade_futura = idade + 5
console.log("Daqui 5 anos você terá: "+idade_futura)


}

// atividade1()
function atividade1(){

    let ano_nascimento = parseInt (prompt("Digite o ano de Seu Nascimento: "))
    let ano_atual = parseInt (prompt("Digite o Ano Atual: "))
    let idade = ano_atual - ano_nascimento
    console.log("Sua idade é de: "+idade)
}

// atividade2()
function atividade2(){

    let num1 = parseInt (prompt("Digite um Número: "))
    let num2 = parseInt (prompt("Digite outro Número: "))
    let soma = num1 + num2 
    console.log("A soma desses dois números é de: "+soma)
}

// atividade3()
function atividade3(){

    let metros = parseInt (prompt("Digite a Distancia em Metros: "))
    let km = metros / 1000
    console.log("A Distância em kilômetros é de: "+km+" KM")
}

// atividade4()
function atividade4(){

    let nota1 = parseInt(prompt("Digite a Primeira nota: "))
    let nota2 = parseInt(prompt("Digite a Segunda nota: "))
    let media = (nota1 + nota2) /2
    console.log("A Média é de: "+media)
}

// atividade5()
function atividade5(){

    let numero = parseInt(prompt("Digite um Número: "))
    let num1 = numero * 1
    let num2 = numero * 2
    let num3 = numero * 3
    let num4 = numero * 4
    let num5 = numero * 5
    let num6 = numero * 6
    let num7 = numero * 7
    let num8 = numero * 8
    let num9 = numero * 9
    let num10 = numero * 10
    console.log(
        numero+" X"+" 1"+" = "+num1+"\n"+
        numero+" X"+" 2"+" = "+num2+"\n"+
        numero+" X"+" 3"+" = "+num3+"\n"+
        numero+" X"+" 4"+" = "+num4+"\n"+
        numero+" X"+" 5"+" = "+num5+"\n"+
        numero+" X"+" 6"+" = "+num6+"\n"+
        numero+" X"+" 7"+" = "+num7+"\n"+
        numero+" X"+" 8"+" = "+num8+"\n"+
        numero+" X"+" 9"+" = "+num9+"\n"+
        numero+" X"+" 10"+" = "+num10
    )

}

