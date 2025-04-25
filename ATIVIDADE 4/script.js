const escolha = document.getElementById('escolhaCor');

escolha.addEventListener('keypress', function (evento) {
    if (evento.key == 'Enter') {
        document.body.style.backgroundColor = escolha.value;
    }
})