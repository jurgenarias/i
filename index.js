var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#example-form-input");
  var inputValue = inputElement.property("value");

  var texto = (inputValue)
    .replace(/gui/g, "!!!@").replace(/gue/g, "!!!@")
    .replace(/guí/g, "%%%&").replace(/gué/g, "%%%&")
    .replace(/que/g, "-###").replace(/qui/g, "-###")
    .replace(/qué/g, "===-").replace(/quí/g, "===-")
    .replace(/GUI/g, ";;;@").replace(/GUE/g, ";;;@")
    .replace(/GUÍ/g, "%%%&").replace(/GUÉ/g, "%%%&")
    .replace(/QUE/g, "-#-#-").replace(/QUI/g, "-#-#-")
    .replace(/QUÉ/g, "/=/=/").replace(/QUÍ/g, "&%&%&%")
    .replace(/Que/g, "@!@!@!")
    .replace(/Qué/g, "-%-%-%")
    .replace(/a/g, "i").replace(/e/g, "i").replace(/o/g, "i")
    .replace(/u/g, "i").replace(/A/g, "I").replace(/E/g, "I")
    .replace(/O/g, "I").replace(/U/g, "I").replace(/á/g, "í")
    .replace(/é/g, "í").replace(/ó/g, "í")
    .replace(/ú/g, "í").replace(/Á/g, "Í").replace(/É/g, "Í")
    .replace(/Ó/g, "Í").replace(/Ú/g, "Í")

  var textoConQ = texto
    .replace(/!!!@/g, "gui").replace(/%%%&/g, "guí")
    .replace(/-###/g, "qui").replace(/===-/g, "quí")
    .replace(/;;;@/g, "GUI").replace(/%%%&/g, "GUÍ")
    .replace(/-#-#-/g, "QUI").replace(/&%&%&%/g, "QUÍ")
    .replace(/@!@!@!/g, "Qui").replace(/-%-%-%/g, "Quí")


  d3.select("h1>span").text(textoConQ);
  d3.select("#copiar").html('<button id="boton-copiar" class="btn btn-default btn-lg" onclick="copyClipboard()">COPIAR <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path fill-rule="evenodd"d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg></button> ')


}

function copyClipboard() {
  var text = d3.select("#ni").text()
  console.log(text)
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: ¡Copiado!');
  }, function (err) {
    console.error('Async: No se pudo copiar: ', err);
  })
};


var limpia = d3.select("#limpiar");
limpia.on("click", runLimpia);
function runLimpia() {
  d3.event.preventDefault();
  document.getElementById("example-form-input").value = "";
  d3.select("#ni").html("")
  d3.select("#copiar").html("")

}