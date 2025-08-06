let prompt = require("prompt-sync")();

let busca

let nomes = [
    {
        id: 1,
        nome: "Chaves",
        idade: 8,
        
    },
    {
        id: 2,
        nome: "Kiko",
        idade: 10,
        
    },
    {
        id: 3,
        nome: "Seu Madruga",
        idade: 69,
        
    },
    {
        id: 4,
        nome: "Chiquinha",
        idade: 8,
        
    },
    {
        id: 5,
        nome: "Nhonho",
        idade: 9,
        
    },
    {
        id: 6,
        nome: "Bruxa do 71",
        idade: 69,
        
    },
]

main()

function main(){
   
    console.clear()
    console.log("---- OPÇÕES DISPONÍVEIS ---- \n")
    console.log("1 - Listar todos")
    console.log("2 - Buscar por Nome")
    console.log("3 - Sair \n")
        
    let opcao = prompt("Digite uma opção:   ")
    
    if (opcao == "1")
    {
        console.log("1 - Para Listar de forma Crescente")
        console.log("2 - para Listar em Forma Decrescente")
        let ordem = (prompt(`Selecione 1 ou 2: `))

        if(ordem == "1")
        {
            crescente()

            prompt("Aperte a teclar ENTER para voltar ao menu....")
            main()
        }
        else if(ordem == "2")
        {
            decrescente()
            prompt("Aperte a teclar ENTER para voltar ao menu....")
            main()
        }

    }
    else if(opcao == "2")
    {
        
        console.clear()
        
        let busca = prompt("Digite um Nome: ")
        //buscarNome(busca)
        prompt("Aperte a teclar ENTER para voltar ao menu....")
        main()
    }
    else if(opcao == "3")
    {
        return
    }

    
}

function crescente(){
    for (let i = 0; i < nomes.length; i++) {
        console.log(`ID [${nomes[i].id}] - ${nomes[i].nome} ${nomes[i].idade} anos `)
        
    }
}



function decrescente(){

    for (let i = nomes.length - 1; i >= 0 ; i--) {
        console.log(`ID [${nomes[i].id}] - ${nomes[i].nome} ${nomes[i].idade} anos `)
        
    }
}

function buscarNome(busca){
    
    for (let i = 0; i < nomes.length; i++) {
        
        if (busca == nomes[i].nome){
            
            console.log(`ID [${nomes[i].id}] - ${nomes[i].nome} ${nomes[i].idade} anos `)
        }
         
    }
    


}

function buscaparte(){
    
}
    