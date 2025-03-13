//Função para carregar o conteudo ao abrir a página
document.addEventListener('DOMContentLoaded', ()=> {
    //Localizar a div que vai receber o conteudo
    const divConteudo = document.getElementById('conteudo');

    //Função para carregar o conteudo
    function carregar(){
        fetch('https://fabiooliveira.cloud/api_01/')
            .then(resposta => resposta.json())
            .then(dados =>{
                divConteudo.innerHTML = "";
                dados.forEach(item => {
                    divConteudo.innerHTML += `
                                        <div class='pessoa'>
                                            <b>Cód.:</b> ${item.id} <br>
                                            <b>Nome:</b> ${item.nome} <br>
                                            <b>Curso: </b> ${item.curso} <br>
                                            <b> Status: </b> ${item.status} <br>
                                            <b> Data de nascimento: </b> ${item.data_nascimento}<br>
                                        </div>
                                    `;
                    });
            })
    }//Fim da função carregar

    //Chamar a função carregar
    carregar();

})//Fim do DOMContentLoaded