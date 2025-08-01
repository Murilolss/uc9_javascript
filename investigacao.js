let prompt = require("prompt-sync")();

console.log("Responada apenas com SIM e NAO a esse Interrogatório\n")
let telefone = prompt("Você telefonou para a Vitima?: ")
let local = prompt("Você esteve no local da Vitima?: ")
let casa = prompt("Você mora perto da Vitima?: ")
let devia = prompt("Você devia para a Vitima?: ")
let trabalho = prompt("Você trabalhou com a Vitima?: ")
let pontuação = 0
let suspeito
let cumplice
let assasino

if (telefone == "SIM")
{
    pontuação++
}
if (local == "SIM")
{
    pontuação++
}
if (casa == "SIM")
{
    pontuação++
}
if (devia == "SIM")
{
    pontuação++
}
if (trabalho == "SIM")
{
    pontuação++
}

if(pontuação == 2)
{
    console.log("Você é Considerado SUSPEITO "+pontuação)
}
else if(pontuação >3 <= 4)
{
    console.log("Você é Considerado CÚMPLICE "+pontuação)
}
else if(pontuação == 5)
{
    console.log("Você é Considerado ASSASINO "+pontuação)
}




