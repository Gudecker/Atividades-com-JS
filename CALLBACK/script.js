//o callbak é tipo uma chamada de função, assim que você finaliza o que tem de fazer, a função callback é chamada e executada
function saudacao(nome, callback) {
    console.log("\nOlá, " + nome + "!");
    setTimeout(callback, 2000); //aqui ele chama a função callback, mas espera de 2 segundos
    //callback(); //aqui ele chama a função callback, mas de forma instantanea
}

function despedida() {
    console.log("Até mais!");
    
}

const nome = prompt("Qual é o seu nome?"); 
saudacao(nome, despedida);
//por exemplo, assim que você termina de inserir o nome 
// a funçao "saudacao" esta completa, então ele executa a função e chama a função "despedida"
