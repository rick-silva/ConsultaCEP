async function PromiseCEP(){
    let numCEP = document.getElementById("CepID").value
    let cep = await fetch(`https://viacep.com.br/ws/${numCEP}/json/`);
    //Converte o JSON para objeto JS
    let cepConvertido = await cep.json()
    console.log(typeof(cepConvertido))
    console.log(`Número CEP: ${numCEP} \nLogradouro: ${cepConvertido.logradouro} \nBairro: ${cepConvertido.bairro} \nCidade: ${cepConvertido.localidade} \nUF: ${cepConvertido.uf}`)

    let div = document.getElementById("dados")
// div.innerHTML = `<p>Número CEP: ${numCEP}</p> <p>Logradouro: ${cepConvertido.logradouro}</p> <p>Bairro: ${cepConvertido.bairro}</p> <p>Cidade: ${cepConvertido.localidade}</p> <p>UF: ${cepConvertido.uf}</p>`

div.innerHTML = `<div class='card' style='width: 18rem;'>
                    <div class='card-body'>
                        <h5 class='card-title'>Número CEP:${numCEP}</h5>
                        <p class='card-text'>Logradouro: ${cepConvertido.logradouro}</p>
                        <p class='card-text'>Bairro: ${cepConvertido.bairro}</p>
                        <p class='card-text'>Cidade: ${cepConvertido.localidade}</p>
                        <p class='card-text'>UF: ${cepConvertido.uf}</p>

                    </div>
                </div>`
}



