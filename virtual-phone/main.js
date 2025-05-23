const display = document.querySelector('input[type=tell]');
const teclas = document.querySelectorAll('input[type=button]');
function ValorTeclaToDisplay (i) {
    display.value += teclas[i].value;
}
for(let i =0; index < teclas.length; i++){
console.log(teclas[i].value)
}
teclas[0].onclick =() => {
    valorTeclaToDisplay(0);
}
limpar.onClick = () =
//tarefinha: Criar uma condição para travar mais de 14 digitos 