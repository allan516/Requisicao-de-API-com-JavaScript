
const submit = document.querySelector('#submit');
const result = document.querySelector('.result');

submit.addEventListener('click', (e) => {
    
    e.preventDefault();    
    const userId = document.querySelector('#verificaId').value;
    const urlApi = `https://jsonplaceholder.typicode.com/users/${userId}`;    
        fetch(urlApi)
        .then((response) => {
            if(!response.ok) {
            throw new Error('Erro ao fazer a requisição.');
            }
            return response.json(); 
        })

        .then((data) => {
            result.innerHTML = `<p>Nome: ${data.name}</p>
                                 <p> Cidade: ${data.address.city}</p>
                                 <p>Contato: ${data.phone}</p>`;
            document.querySelector('#verificaId').value = '';
            document.querySelector('#verificaId').focus();                     
            return;
        }).catch(erro => {
            result.innerHTML = `<p>Digite um ID entre 1 e 10</p>`;
            console.warn(erro);
            });         
});

//https://jsonplaceholder.typicode.com/albums?userId=${userId}