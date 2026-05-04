
const catalogo = [
    {
        id: 1,
        titulo: "Inception",
        tipo: "filme",
        ano: 2010,
        generos: ["Ficção científica", "ação"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 2,
        titulo: "The Last of Us",
        tipo: "série",
        ano: 2023,
        generos: ["Drama", "Pós-apocalíptico"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Five Nights at Freddy's",
        tipo: "filme",
        ano: 2023,
        generos: ["Ficção científica", "Terror"],
        nota: 6.0,
        assistido: false
    },
    {
        id: 4,
        titulo: "Inside Out 2",
        tipo: "filme",
        ano: 2024,
        generos: ["Animação", "ação"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "Rio",
        tipo: "filme",
        ano: 2011,
        generos: ["Animação", "ação"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 6,
        titulo: "Fast and Furious Tokyo Drift",
        tipo: "filme",
        ano: 2006,
        generos: ["ação"],
        nota: 8.5,
        assistido: false
    },
];

console.log("Catalogo completo:", catalogo);
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);
const terceiroItem = catalogo[2];
if (terceiroItem.generos && terceiroItem.generos.length >=2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item não possui um segundo gênero cadastrado.");
}
console.log("Listagem de Títulos");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caixa Alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);

const itemNotaAlta = catalogo.find(item => item.nota >= 9);
if (itemNotaAlta) {
    console.log(`Item nota 9+: ${itemNotaAlta.titulo} (Nota: ${itemNotaAlta})`);  
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

const somaNotasTotal = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaTotal = somaNotasTotal / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaNotasAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = assistidos.length > 0 ? somaNotasAssistidos / assistidos.length : 0;

console.log(`Média geral das notas: ${mediaTotal.toFixed(2)}`);
console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);

const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length >= 1);

console.log(`Existe algum item antes de 2000? ${existeAntigo ? "Sim" : "Não"}`);
console.log(`Todos possuem pelo menos 1 gênero? ${todosTemGenero ? "Sim" : "Não"}`);

const totalItens = catalogo.length;
const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "série").length;
const totalNaoAssistidos = catalogo.filter(item => !item.assistido).length;

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / totalItens;

const top3 = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0,3);

let rankingHTML = "<ul>";
top3.forEach(item => {
    rankingHTML +=  `<li>${item.titulo} - Nota: ${item.nota}</li>`;
});
rankingHTML += "</ul>";

const divOutput = document.getElementById("output");

divOutput.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${totalFilmes} | <strong>Séries:</strong> ${totalSeries}</p>
    <p><strong>Não assistidos:</strong> ${totalNaoAssistidos}</p>
    <p><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</p>
    
    <h3>Top 3 Avaliações:</h3>
    ${rankingHTML}
`;
