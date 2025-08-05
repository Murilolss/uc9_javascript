let prompt = require("prompt-sync")();


let opcao

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

// let nomes = ["Chaves","Kiko", "Pops ands Bangs", "Madruga"]
main()

function main(){
    let opcao = prompt("Digite 1 para cadastrar, 2 para listar, 3 para buscar e 4 para sair: ")
    let id
    if(opcao == 1){
        let nome = prompt("Digite um nome: ")
        let idade = prompt("Digite sua idade: ")
        nomes.push({
            id: nomes[nomes.length - 1].id + 1,
            nome: nome,
            idade: idade
        })
        
        main()
    }
    else if (opcao == 2)
    {
        for (let i = 0; i < nomes.length; i++) {
            console.log(`${i+1} - ${nomes[i].nome} ${nomes[i].idade} anos ID [${nomes[i].id}]`)
            
        }

        console.log(prompt("\nPressione ENTER para voltar ao menu..."))
        main()
    }

    else if (opcao == 3)
        {
            let posicao = prompt("Digite a posição do usuário que quer buscar: ") 

            if (nomes.length >= posicao){
                console.log(`O usuário é ${nomes[posicao-1].nome}`)
                let alteracao = (prompt("Digite 1 para alterar e 2 para sair: "))
                if(alteracao == "1"){
                    alterar(posicao-1)
                }
                else if (opcao == "4")
                {
                    return
                }

                else 
                {
                    main()
                }

            }
            else
            {
                console.log(`O usuário não existe`)
            }
           
        }

        
}




function teste(){
    
    let nomes = [ "Jailson", "Mendes", "Laranja" ]
    
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)
    
    nomes[0] = "Ricardo"
    nomes[1] = "Milos"
    nomes.push("Doce")
    console.log(`O usuário ${nomes[0]} ${nomes[1]} gosta de escutar ${nomes[3]}`)
}

function alterar(posicao){
    let novo_nome = prompt("Digite um novo Nome: ")
    nomes[nomes.length].nome = novo_nome
    console.log("Nome alterado com sucesso!!")
    setTimeout(() => {
        main()
    }, 2000);

}

