const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();


const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const mensagem = document.getElementById('mensagem').value;

resultado.innerHTML = 
`<h2>Dados recebidos:</h2>
<p><strong>Nome:</strong> ${nome}</p>
<p><strong>E-mail:</strong> ${email}</p>
<p><strong>Mensagem:</strong> ${mensagem}</p>`;

formulario.reset();

})