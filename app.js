//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    limparResultado();

    const nomeAmigoTela = document.getElementById("amigo");
    const nomeAmigo = nomeAmigoTela.value.trim();

    if(nomeAmigo == "") {
        alert("Por favor, insira um nome!");
        return;
    }

    listaAmigos.push(nomeAmigo);

    const listaAmigosTela = document.getElementById("listaAmigos");

    const itemLista = document.createElement("li");
    itemLista.textContent = nomeAmigo;

    listaAmigosTela.append(itemLista);

    nomeAmigoTela.value = "";
}

function sortearAmigo() {
    if(listaAmigos.length == 0) {
        alert("Por favor,insira pelo menos um nome!");
        return;
    }

    const indiceAmigoSorteado = Math.trunc(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAmigoSorteado];

    limparLista();

    const resultadoTela = document.getElementById("resultado");
    resultadoTela.textContent = "O seu amigo sorteado é: " + amigoSorteado;
}

function limparLista() {
    listaAmigos = [];
    const listaAmigosTela = document.getElementById("listaAmigos");
    listaAmigosTela.innerHTML = "";
}

function limparResultado() {
    const resultadoTela = document.getElementById("resultado");
    resultadoTela.innerHTML = "";
}