$(document).ready(function(){
    $.getJSON('./data/geral.json', function(data1){
        $.getScript('./script/index.js');
        $.getScript('./script/data.js');
    });
});