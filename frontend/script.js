async function carregarDados() {
    const url = "https://bug-free-succotash-g54qp74qj9jhv596-3000.app.github.dev/";

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro ao acessar a API");
        }

        const dados = await resposta.json();

        const listaProdutos = document.getElementById("lista-produtos");

        listaProdutos.innerHTML = `
            <div class="card">
                <h2>${dados.nome}</h2>
                <p>Categoria: ${dados.categoria}</p>
                <p class="preco">R$ ${dados.preco}</p>
            </div>
        `;
    } catch (erro) {
        document.getElementById("lista-produtos").innerHTML = `
            <p>Erro ao carregar o produto: ${erro.message}</p>
        `;

        console.error(erro);
    }
}

carregarDados();