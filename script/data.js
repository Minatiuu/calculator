$(document).ready(function() {
$.getJSON('../data/geral.json', function(data){
console.log(data.jLog.sintaxe);

});
});