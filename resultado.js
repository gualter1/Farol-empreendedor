function modificaResultado() {
    const botao = ['copiar-btn']
    const textoBotao = ['Copiar Resultado']

    botao.push('voltar-btn')
    textoBotao.push("Volta na pagina anterior")
    //botao.push('novo-btn')
    //textoBotao.push(`Ir para ${localStorage.nomeOpcaoPagina}`)

    let resultadoInicial = document.getElementById('result-container2')
    resultadoInicial.innerText += "\n O que voce quer fazer agora?\n"

    for (let i = 0; i < botao.length; i++) {
        resultadoInicial.innerHTML +=  `<button id="${botao[i]}">${textoBotao[i]}</button>\n`
        
    }

    document.getElementById("copiar-btn").addEventListener("click", function (){

        navigator.clipboard.writeText(resultadoFinal).catch(err => {
            console.log('texto copiado')
            console.error("Erro ao copiar:", err);
        });
    })

    document.getElementById("voltar-btn").addEventListener("click", function () {
        history.back()
    })
    
    document.getElementById("novo-btn").addEventListener("click", function () {
        const novaPagina = localStorage.getItem("opcaoPagina")
        if (novaPagina) {
            window.location.href = novaPagina
        } else {
            window.location.href = "index.html"
        }
    })

    
    
}

modificaResultado()

