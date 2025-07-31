let prompt = require("prompt-sync")();
/*
let idade = 20

if(idade >= 18)
{
    console.log("Pode Tirar CNH")
}

else
{
    console.log("Não Pode tirar CNH")
}

let senha = prompt("Digite a senha do sistema: ")

if(senha == "admin")
{
    console.log("Senha Correta")
}
else
{
    console.log("Acesso Negado, Tente Novamente!!!!")
}

*/

// atividadepeixe()
function atividadepeixe(){

    let peso = parseInt(prompt("Digite a quantidade de Peixe em kg: "))
    

    if(peso > 100)
    { 
        let total = peso * 55.90
        console.log("Total de da venda: R$ "+total)
    }
    else
    {
        let total = peso * 50
        console.log("Total de da venda: R$ "+total)
    }
}


atividade2()
function atividade2(){

    let valor = parseInt(prompt("Digite o Valor da Compra: "))
    let pagamento = prompt("Selecione uma Forma de Pagamento: Crédito ou Débito: ")
    let valor1 = valor + (valor * 0.05)
    let valor2 = valor - (valor * 0.10)

    if(pagamento == "Credito")
    {

        console.log("O Valor Total ficou em R$: "+valor1+", Compras no Crédito tem um acréssimo de 5% no valor da compra")
    }
    
    else if(pagamento == "Debito")
    {
    
        console.log("O Valor Total ficou em R$: "+valor2+", Compras no débito tem um desconto de 10% no valor da compra")
    }
    else
    {
        console.log("Forma de Pagamento INDISPONÍVEL OU DIGITADA INCORRETAMENTE")
    }

}
    

    

