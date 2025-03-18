//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nome = "";

// criando lista de amigos vazia
let listaDeAmigos = [];

//criando função de adicionar amigo na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
// funcão para atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}
// funcão para sortear amigo 
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  

