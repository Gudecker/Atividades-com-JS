
let fundoBranco = true;

document.getElementById('botao').addEventListener('click', function () {
    if (fundoBranco) {
        document.body.style.backgroundColor = 'black';
      }
      else {
        document.body.style.backgroundColor = 'white';
      }
      fundoBranco = !fundoBranco;
})