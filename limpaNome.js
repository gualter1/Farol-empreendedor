import { padronizaNome } from "./utils.js"

function limpaNomeCliente(nome) {
    
    let nomeLimpo =  ''
    let nomeClientes = nome.replace(/\d+|\./gm, "").replace(/ltda/gmi, "").split('\n')
    for (let i = 0; i < nomeClientes.length; i++) {
        nomeLimpo += `${padronizaNome(nomeClientes[i])}\n`
    }
    return nomeLimpo
}
   

function calcularSumula() {
    
    let nomeDoCliente = document.getElementById("nomes-cliente").value
        
    const resultado = limpaNomeCliente(nomeDoCliente)
       
    localStorage.setItem("resultadoFinal", resultado); // Salva o resultado
    localStorage.setItem("paginaOrigem", "cnpjLegal.html" );
    window.location.href = "resultado.html";
}

document.getElementById("botao-calcular").addEventListener("click", calcularSumula);
