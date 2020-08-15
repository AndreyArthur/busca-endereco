function getCep(cep) {
	cep = document.querySelector('input').value;
	
	window.fetch(`https://viacep.com.br/ws/${cep}/json/`)
	.then( data => {
		return data.json()
		.then( endereco => {
			printCep(endereco)
		})
	})
}

function printCep(endereco) {
	document.querySelector('p')
		.innerHTML=`Você mora na ${endereco.logradouro} que fica no bairro ${endereco.bairro} na cidade de ${endereco.localidade}, ${endereco.uf}`
}

document.querySelector('form').addEventListener('submit', (e) => {
	getCep()
	e.preventDefault()
})