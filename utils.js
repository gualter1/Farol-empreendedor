const caracteres = [
    "á", "à", "â", "ã", "ä", "é", "è", "ê", "ë", "í", "ì", "î", "ï", "ó", "ò", "ô", "õ", "ö",
    "ú", "ù", "û", "ü", "ç", "ñ", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", 
    "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\n"
];

const codigos = [
    "%C3%A1", "%C3%A0", "%C3%A2", "%C3%A3", "%C3%A4", "%C3%A9", "%C3%A8", "%C3%AA", "%C3%AB","%C3%AD", "%C3%AC", 
    "%C3%AE", "%C3%AF", "%C3%B3", "%C3%B2", "%C3%B4", "%C3%B5", "%C3%B6", "%C3%BA", "%C3%B9", "%C3%BB", "%C3%BC", 
    "%C3%A7", "%C3%B1", "%20", "%21", "%22", "%23", "%24", "%25", "%26", "%27", "%28", "%29", "%2A", "%2B", "%2C", 
    "%2D", "%2E", "%2F", "%3A", "%3B", "%3C", "%3D", "%3E", "%3F", "%40", "%0A"
];

function cortaTexto(nomes, cnpj, telefone) {
    let nomesCortado = nomes.replace(/\d+|\./gm, '').split('\n')
    let cnpjCortado = cnpj.split('\n')
    let telefoneCortado = telefone.split('\n')

    let dados = {
        cnpj: [], 
        cliente: [],
        telefones: []
    }
    for (let i = 0; i < nomesCortado.length; i++) {
        dados.cnpj.push(converteCnpj(cnpjCortado[i]))
        dados.cliente.push(padronizaNome(nomesCortado[i])) 
        dados.telefones.push(tiraNove(telefoneCortado[i]))
       
    }
    return { dados }
}

function padronizaNome(nomes) {
  let nomeBruto = nomes.replace(/\d+|\./gm, '')
  let nomesMinusculo = nomeBruto.trim().toLowerCase().split(" ")
  
  let nomeCompleto = ''
  let nomePadronizado = []
    for (let i = 0; i < nomesMinusculo.length; i++) {
      const dividiNome = nomesMinusculo[i].split('') // armazena o array do nome
  
      const letraInicio = dividiNome[0].toUpperCase()
      dividiNome.splice(0, 1, letraInicio)
      
      nomePadronizado.push(dividiNome.join('').trim())
    }
      nomeCompleto += nomePadronizado.join(' ').trim()

    return nomeCompleto
}

function contaNome(nomeCompleto) {
  let nomeCortado = nomeCompleto.trim().split(" ")
  let nome = [nomeCortado[0]]
      
    if(nomeCortado[1].length > 3) {
      nome.push(nomeCortado[1])
    } else if (nomeCortado[1].length <= 3){
      nome.push(nomeCortado[1], nomeCortado[2])
    }

    let nomeReduzido = ""
    for (let i = 0; i < nome.length; i++) {
      nomeReduzido += nome[i] + " " 
    }
  return nomeReduzido
}

function elogio() {
let hora = (new Date().getUTCHours() + 21 )%24
//console.log(hora) 
let cumprimento = ""
if (hora < 12) {
  cumprimento = "Bom dia"
} else {cumprimento = "Boa tarde"}

return cumprimento
} 

function converteTexto (texto){
    let textoCortado = texto.split('')

    for (let i = 0; i < textoCortado.length; i++) {
        for (let j = 0; j < caracteres.length; j++) {
            if (textoCortado[i] === caracteres[j]) {
                textoCortado[i] = codigos[j]
            }           
        }
    }
    let textonovo = textoCortado.join('')
    return textonovo
}

function converteCnpj(numeroCnpj) {
  numeroCnpj = numeroCnpj.toString()
  while(numeroCnpj.length < 14) {
    numeroCnpj = "0" + numeroCnpj
  }

  let numeroCnpjcortado = numeroCnpj.toString().split('')

  let valor1 = numeroCnpjcortado[0] + numeroCnpjcortado[1]
  let valor2 = numeroCnpjcortado[2] + numeroCnpjcortado[3] + numeroCnpjcortado[4]
  let valor3 = numeroCnpjcortado[5] + numeroCnpjcortado[6] + numeroCnpjcortado[7]
  let valor4 = numeroCnpjcortado[8] + numeroCnpjcortado[9] + numeroCnpjcortado[10] + numeroCnpjcortado[11]
  let valor5 = numeroCnpjcortado[12] + numeroCnpjcortado[13]

  let numeroCnpjatt = `${valor1}.${valor2}.${valor3}/${valor4}-${valor5}`

  return numeroCnpjatt
}

function tiraNove(telefone) {

  let ddi = telefone.substring(0, 2)
  let ddd = telefone.substring(2, 4)
  let numeroTelefone = telefone.substring(telefone.length - 8)

  let telefoneFinal = ''
  if (ddd < 30) {
    telefoneFinal = ddi + ddd + "9" + numeroTelefone
  } else {
    telefoneFinal = ddi + ddd + numeroTelefone
  }

  return telefoneFinal
}

export { converteTexto, converteCnpj, padronizaNome, contaNome, elogio, tiraNove, cortaTexto }

