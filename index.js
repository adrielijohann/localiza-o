const cep = document.getElementById("cep");
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep");
    let search = Cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/${search}/json/`, {
        header: {
            'mode': 'cors'
        }
    }).then((response) => {
        response.json().then(data => {
            console.log(data);
            document.getElementById("rua").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
            document.getElementById("ibge").value = data.ibge;
            document.getElementById("ddd").value = data.ddd;
        })
    })

})

function enviar() {
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;
    let ibge = document.getElementById("ibge").value;
    let ddd = document.getElementById("ddd").value
}