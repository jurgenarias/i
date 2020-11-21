var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#example-form-input");
  var inputValue = inputElement.property("value");
  
  var texto = (inputValue)
  .replace(/gui/g,"!!!@").replace(/gue/g,"!!!@")
  .replace(/guí/g,"%%%&").replace(/gué/g,"%%%&")
  .replace(/que/g,"-###").replace(/qui/g,"-###")
  .replace(/qué/g,"===-").replace(/quí/g,"===-")
  .replace(/GUI/g,";;;@").replace(/GUE/g,";;;@")
  .replace(/GUÍ/g,"%%%&").replace(/GUÉ/g,"%%%&")
  .replace(/QUE/g,"-#-#-").replace(/QUI/g,"-#-#-")
  .replace(/QUÉ/g,"/=/=/").replace(/QUÍ/g,"&%&%&%")
  .replace(/Que/g,"@!@!@!")
  .replace(/Qué/g,"-%-%-%")
  .replace(/a/g,"i").replace(/e/g,"i").replace(/o/g,"i")
  .replace(/u/g,"i").replace(/A/g,"I").replace(/E/g,"I")
  .replace(/O/g,"I").replace(/U/g,"I").replace(/á/g,"í")
  .replace(/é/g,"í").replace(/ó/g,"í")
  .replace(/ú/g,"í").replace(/Á/g,"Í").replace(/É/g,"Í")
  .replace(/Ó/g,"Í").replace(/Ú/g,"Í")
  
  var textoConQ = texto
  .replace(/!!!@/g,"gui").replace(/%%%&/g,"guí")
  .replace(/-###/g,"qui").replace(/===-/g,"quí")
  .replace(/;;;@/g,"GUI").replace(/%%%&/g,"GUÍ")
  .replace(/-#-#-/g,"QUI").replace(/&%&%&%/g,"QUÍ")
  .replace(/@!@!@!/g,"Qui").replace(/-%-%-%/g,"Quí")

  
  d3.select("h1>span").text(textoConQ)
}
