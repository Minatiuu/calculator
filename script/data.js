$(document).ready(function() {
    $.getJSON('../data/geral.json', function(data){
        $('#calculator_historic > div').html("");
        $('#number_1').click(function() {
            window.open('../page/test.html', 'Teste',
            'width=500, height=300, resizable=on');
        });
    });
});