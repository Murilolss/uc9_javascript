// acumular valores em uma variável

let personagem = "Taxad"
let moedas = 0 

console.log("Bem-Vindo ao Jogo")
console.log(personagem+": "+moedas+" Moedas")

moedas = 1
console.log(personagem+": "+moedas+" Moedas")

//moedas += 1
moedas++
//moedas = moedas + 1
console.log(personagem+": "+moedas+" Moedas")

moedas++
moedas++
moedas += 5
moedas -= 2
moedas += 3

console.log(personagem+": "+moedas+" Moedas")

moedas += 10
moedas = moedas /2
moedas++ // checkpoint
let checkpoint = moedas
moedas = moedas *2

console.log(personagem+": "+moedas+" Moedas")

// morreu

moedas = 0
console.log(personagem+": "+moedas+" Moedas")


// Reviveu
moedas = checkpoint
console.log(personagem+": "+moedas+" Moedas")