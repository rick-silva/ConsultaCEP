async function PromiseCEP(){
    let numCEP = document.getElementById("CepID").value
    let cep = await fetch(`https://viacep.com.br/ws/${numCEP}/json/`);
    let cepConvertido = await cep.json()
    console.log(typeof(cepConvertido))
    console.log(`Número CEP: ${numCEP} \nLogradouro: ${cepConvertido.logradouro} \nBairro: ${cepConvertido.bairro} \nCidade: ${cepConvertido.localidade} \nUF: ${cepConvertido.uf}`)

    let div = document.getElementById("dados")
div.innerHTML = `<p>Número CEP: ${numCEP}</p> <p>Logradouro: ${cepConvertido.logradouro}</p> <p>Bairro: ${cepConvertido.bairro}</p> <p>Cidade: ${cepConvertido.localidade}</p> <p>UF: ${cepConvertido.uf}</p>`
}

