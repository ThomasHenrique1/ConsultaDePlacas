document.querySelector("#botao").addEventListener("click", function() {
    let pesquisa = document.querySelector("#pesq").value.trim();
    let div = document.querySelector("#placa");
    div.innerHTML = ''; // Limpar o conteúdo anterior

    let resultadoEncontrado = false;

    for (let i = 0; i < detran.length; i++) {
        if (pesquisa === detran[i].placa) {
            resultadoEncontrado = true;
            let gravidadeClass;

            switch (detran[i].gravidade) {
                case 'Leve':
                    gravidadeClass = 'leve'; // Azul claro
                    break;
                case 'Média':
                    gravidadeClass = 'media'; // Laranja claro
                    break;
                case 'Grave':
                    gravidadeClass = 'grave'; // Vermelho
                    break;
                case 'Gravíssima':
                    gravidadeClass = 'gravissima'; // Bordô
                    break;
                default:
                    gravidadeClass = ''; // Nenhuma classe para casos não especificados
            }

            div.innerHTML += `
                <div class="placa ${gravidadeClass}">
                    <h1>Placa: ${detran[i].placa}</h1>
                    <div class="flex">
                        <div><img src="${detran[i].foto}" alt="Foto da placa"></div>
                        <div>
                            <p><span>CNH:</span> <span class="cor">${detran[i].cnh}</span></p>
                            <p><span>Nome:</span> <span class="cor">${detran[i].proprietario}</span></p>
                            <p><span>Gravidade:</span> <span class="gravidade">${detran[i].gravidade}</span></span></p>
                            <p><span>Pontos:</span> <span class="cor">${detran[i].pontos}</span></p>
                            <p><span>Data:</span> <span class="cor">${detran[i].data_infracao}</span></p>
                            <p><span>Valor:</span> <span class="cor">${detran[i].valor}</span></p>
                        </div>
                    </div>
                </div>`;
        }
    }

    if (!resultadoEncontrado) {
        div.innerHTML = '<p>Placa não encontrada. Tente novamente.</p>';
    }
});
