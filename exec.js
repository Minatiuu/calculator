$(document).ready(function(){
    $.getJSON('./data/geral.json', function(){
        $.getScript('./script/index.js');
        $.getScript('./script/data.js');
    });
});