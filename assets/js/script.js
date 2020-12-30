window.addEventListener('load', start);

var nomeGeral = "Banana";

function start() {
    //window.alert('iniciou page')
    console.log("Olá mundo");
}

function handleEnviar(e) {
    e.preventDefault();
    var nome = document.getElementById('nome');

    var h3 = document.querySelector('h3');

    h3.textContent = nomeGeral;
    h3.classList.add("Destaque");

    var lista = document.getElementById('lista');

    var novoItem = document.createElement('li');

    novoItem.textContent = nome.value;

    if (nome.value != '')
        lista.appendChild(novoItem);

    nome.value = "";

}