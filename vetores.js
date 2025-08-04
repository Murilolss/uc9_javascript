let prompt = require("prompt-sync")();


let opcao
let nomes = []
main()

function main(){
    let opcao = prompt("Digite 1 para cadastrar, 2 para listar, 3 para buscar: ")
    if(opcao == 1){
        let nome = prompt("Digite um nome: ")
        nomes.push(nome)
        main()
    }
    else if (opcao == 2)
    {
        for (let i = 0; i < nomes.length; i++) {
            console.log(`${i+1} - ${nomes[i]}`)
            
        }
    }

    else if (opcao == 3)
        {
            let posicao = prompt("Digite a posição do usuário que quer buscar: ") 

            if (nomes.length >= posicao){
                console.log(`O usuário é ${nomes[posicao-1]}`)
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

