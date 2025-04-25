let valor = 0

const contador = document.getElementById('contador')
const botaoMais = document.getElementById('mais')
const botaoMenos = document.getElementById('menos')

botaoMais.addEventListener('click', function(){
    valor++;
    contador.textContent = valor;
})

botaoMenos.addEventListener('click', function(){
    valor--;
    contador.textContent = valor;
})
