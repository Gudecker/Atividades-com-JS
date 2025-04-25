document.getElementById('enviar').addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    document.getElementById('paragrafo').textContent = texto;
})