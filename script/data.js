$(document).ready(function() {
    const data1 = $.getJSON('../data/geral.json');
    $('#calculator_historic > div').html(data1.jLog.sintaxe);
    console.log("data1.jLog.sintaxe");
});