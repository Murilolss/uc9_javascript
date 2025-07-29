let salsicha = 3.50
let pure = 2.15
let salada = 1.90
let pao = 0.90
let batata_palha = 0.50
let fixo = pao + batata_palha

let hots = fixo + salsicha + pure
let hotd = fixo + (salsicha * 2) + pure + salada
let hote = fixo + (salsicha * 3) + (pure * 2) + salada
hotd = hotd.toFixed(2)
hote = hote.toFixed(2)
hots = hots.toFixed(2)

console.log("Menu")
console.log("\nHotdog simples: Salsicha e purê de batata R$: "+ hots+"\nHotdog duplo: 2 Salsicha, purê de batata e salada R$: "+ hotd+"\nHotdog especial: 3 Salsicha, purê em dobro e salada R$: "+ hote)