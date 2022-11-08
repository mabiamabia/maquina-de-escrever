var content = "coloque seu texto aqui. ";

var text = document.getElementById("text");

var speed = 190; //velocidade em que o texto vai aparecer na tela

var cont = 0;

function typeWriter() {
  if (cont < content.length) {
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  } else {
    text.textContent = "";
    cont = 0;
    typeWriter();
  }
}
typeWriter();
