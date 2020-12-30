window.addEventListener('load', start)

var total = 0,
    totalmedicamento = 0;

function start() {
    document.getElementById('paciente').textContent = " Michael Jackson";
}

function HandleEnviar(e) {
    e.preventDefault();

    var medicamento = document.getElementById('medicamento');

    if (medicamento.value == '') {
        alert('Informe o medicamento');
        return false;
    }

    var preco = document.getElementById('preco');

    var lista = document.getElementById('ListaMedicamentos');

    var item = document.createElement('li');

    item.textContent = medicamento.value + ' - R$ ' + (preco.value != '' ? preco.value : 0);

    lista.appendChild(item);

    total += parseFloat((preco.value != '' ? preco.value : 0));

    totalmedicamento++;

    document.getElementById('total').innerHTML = ' R$ ' + (total);

    document.getElementById('totalmedicamento').innerHTML = ' (' + parseFloat(totalmedicamento) + ')';

    medicamento.value = "";
    preco.value = "";

}