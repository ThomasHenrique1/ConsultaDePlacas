// Função para atualizar os filtros de estados e cidades
function updateFilters() {
    let estados = new Set();
    let cidades = new Set();

    // Adiciona os estados e cidades ao Set para obter valores únicos
    detran.forEach(item => {
        estados.add(item.estado);
        cidades.add(item.cidade);
    });

    // Preenche dropdown de estados
    $('#estado').append(Array.from(estados).map(estado => `<option value="${estado}">${estado}</option>`));

    // Preenche dropdown de cidades
    $('#cidade').append(Array.from(cidades).map(cidade => `<option value="${cidade}">${cidade}</option>`));
}

// Função para exibir placas
function displayPlacas(filteredPlacas) {
    let div = $("#lista");
    div.empty();

    // Adiciona os itens filtrados à lista
    filteredPlacas.forEach(item => {
        div.append(`
            <div class="lista">
                <h3>${item.estado} - ${item.cidade}</h3>
                <h1>${item.placa}</h1>
            </div>
        `);
    });
}

// Função para filtrar placas com base nas seleções do usuário
function filterPlacas() {
    let estado = $('#estado').val();
    let cidade = $('#cidade').val();

    let filteredPlacas = detran.filter(item => {
        return (!estado || item.estado === estado) && (!cidade || item.cidade === cidade);
    });

    displayPlacas(filteredPlacas);
}

// Inicializar filtros e exibir todas as placas ao carregar a página
$(document).ready(function() {
    updateFilters();
    displayPlacas(detran);

    // Configurar evento de clique do botão de filtro
    $('#filter-btn').click(filterPlacas);


});
