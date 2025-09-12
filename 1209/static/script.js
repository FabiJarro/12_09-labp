document.addEventListener('DOMContentLoaded', () => {

    const botoes = document.querySelectorAll(".selector-personagem");
    const containerBiografia = document.getElementById('container-biografia');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const personagemid = botao.dataset.id;

            containerBiografia.innerHTML = `
        <h2>Carregando</h2>
        <p></p>
        `

            fetch(`/biografia/${personagemid}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('A resposta da rede não foi bem sucedida');
                    }
                    return response.json();

                    
                })
                .then(data => {
                    containerBiografia.innerHTML = `
                        <h2>${data.home}</h2>
                        <p>${data.texto}</p>
                    `;
                })
                .catch(error => {
                    console.error('Erro ao buscar a biografia: ', error);
                    containerBiografia.innerHTML = `
                        <h2>Ocorreu um erro.</h2>
                        <p>Não foi possível carregar</p>
                    `;
                });
        });
    });
});






