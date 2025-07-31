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
let meta = 200
let compra_us1 = 3
let compra_us2 = 15
let preco_cafe = 3.50
let desconto_us1
let desconto_us2 
let compra2
let total_us1
let total_us2
let gasto_us1
let gasto_us2


compra2 = compra_us1 + compra_us2
total = cafes_us1 + cafes_us2
falta_us1 = meta - cafes_us1
falta_us2 = meta - cafes_us2
total_us1 = cafes_us1 + compra_us1
total_us2 = cafes_us2 + compra_us2
gasto_us1 = total_us1 * preco_cafe
gasto_us2 = total_us2 * preco_cafe
desconto_us1 = gasto_us1 / 2
desconto_us2 = gasto_us2 / 2

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
console.log("\n---- Quantos faltam para chegar em 200?")
console.log("Faltam "+falta_us1+" para "+usuario1)
console.log("Faltam "+falta_us2+" para "+usuario2)
console.log("\n---- Novas Vendas")
console.log(usuario1+" Comprou "+compra_us1+" novos cafés")
console.log(usuario2+" Comprou "+compra_us2+" novos cafés")
console.log("Juntos foram vendidos "+compra2+" cafés")
console.log("\n---- Gasto por Clientes")
console.log(usuario1+" Gastou R$:  "+gasto_us1+" em cafés")
console.log(usuario2+" Gastou R$:  "+gasto_us2+" em cafés")
console.log("\n---- Gasto por Clientes com desconto")
console.log("Com desconto "+usuario1+" Teria gasto R$: "+desconto_us1)
console.log("Com desconto "+usuario2+" Teria gasto R$: "+ desconto_us2)
console.log("\n---- Fim do Sistema de Consultas!!")
