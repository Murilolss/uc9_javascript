let prompt = require("prompt-sync")();

console.log("Responada apenas com SIM e NAO a esse Interrogatório\n")
let telefone = prompt("Você telefonou para a Vitima?: ")
let local = prompt("Você esteve no local da Vitima?: ")
let casa = prompt("Você mora perto da Vitima?: ")
let devia = prompt("Você devia para a Vitima?: ")
let trabalho = prompt("Você trabalhou com a Vitima?: ")
let pontuação = 0

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

