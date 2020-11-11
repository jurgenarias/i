var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#example-form-input");
  var inputValue = inputElement.property("value");
  d3.select("h1>span").text((inputValue)
  .replace(/a/g,"i").replace(/e/g,"i").replace(/o/g,"i")
  .replace(/u/g,"i").replace(/A/g,"I").replace(/E/g,"I")
  .replace(/O/g,"I").replace(/U/g,"I").replace(/á/g,"í")
  .replace(/é/g,"í").replace(/ó/g,"í")
  .replace(/ú/g,"í").replace(/Á/g,"Í").replace(/É/g,"Í")
  .replace(/Ó/g,"Í").replace(/Ú/g,"Í"))
}
