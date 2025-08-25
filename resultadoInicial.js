// Recuperando o resultado do localStorage
const resultContainer = document.getElementById("result-container");
const resultadoFinal = localStorage.getItem("resultadoFinal") || "Nenhum resultado disponível no momento.";

// Exibindo o resultado formatado
resultContainer.innerHTML = resultadoFinal.replace(/\n/g, "<br>");

