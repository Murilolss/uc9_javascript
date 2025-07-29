let usuario1 = "Pedro"
let usuario2 = "Conrado"
let cliente1 = false
let cliente2 = true
let idade_us1 = 15
let idade_us2 = 19
let cafes_us1 = 5
let cafes_us2 = 187
let total
let falta_us1
let falta_us2

total = cafes_us1 + cafes_us2
falta_us1 = 200 - cafes_us1
falta_us2 = 200 - cafes_us2

console.log("Olá!")
console.log("Bem-Vindo ao sistema de usuários do Conradito "+"\nAbaixo estão as informações dos usuários cadastrados no sistema:")
console.log("\n---- Lista de usuários")
console.log("1 - Nome: "+usuario1+", "+idade_us1+"."+" É cliente: "+cliente1)
console.log("1 - Nome: "+usuario2+", "+idade_us2+"."+" É cliente: "+cliente2)
console.log("\n---- Quantidades de cafés")
console.log("O Cliente "+usuario1+" já tomou"+cafes_us1+" cafés!")
console.log("O Cliente "+usuario2+" já tomou"+cafes_us2+" cafés!")
console.log("\n---- Soma de cafés tomados")
console.log("Juntos, os clientes "+usuario1+" e "+usuario2+" tomaram um total de "+total+" cafés!")