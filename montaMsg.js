import { converteTexto,  padronizaNome, contaNome, elogio, cortaTexto } from "./utils.js"

function montaMensagem(atendente, cliente, cnpj, telefone, mensagem) {
    let textoCortado = cortaTexto(cliente, cnpj, telefone)
    //console.log(textoCortado)
    let textoWtpp =  ''
    for (let i = 0; i < textoCortado.dados.cliente.length; i++) {
        
        let texto = `${elogio()} *${textoCortado.dados.cliente[i]},* meu nome é ${padronizaNome(atendente)}, falo em nome da CNPJ Legal. Tudo bem?\n\n${mensagem}\n\nEsse contato é referente ao CNPJ *${textoCortado.dados.cnpj[i]}.* Caso não seja o responsável pelo CNPJ citado, favor desconsidera a mensagem.`
        textoWtpp += `https://wa.me/${textoCortado.dados.telefones[i]}?text=${converteTexto(texto)}\n`
    }
    return textoWtpp
}

function calcularSumula() {
    
    let atendente = document.getElementById("atendente").value
    let nomeDoCliente = document.getElementById("nomes-cliente").value
    let cnpjDoCliente = document.getElementById("cnpj-cliente").value
    let telefoneCliente = document.getElementById("telefone-cliente").value
    let textoMsg = document.getElementById("mensagem").value
    
    const mensagem = montaMensagem(atendente, nomeDoCliente, cnpjDoCliente, telefoneCliente, textoMsg)
       
    localStorage.setItem("resultadoFinal", mensagem); // Salva o resultado
    localStorage.setItem("paginaOrigem", "cnpjLegal.html" );
    window.location.href = "resultado.html";
}

document.getElementById("botao-calcular").addEventListener("click", calcularSumula);
