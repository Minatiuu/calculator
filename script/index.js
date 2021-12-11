"use strict"
$(document).ready(function() {
$.getJSON('../data/geral.json', function(data){

$('.numbers_row > button').click(function(){
    const doc = $('#display').html()
    const input_register = $('#' + this.id).html()
    $('#display').html(doc + input_register)
});

$(document).keydown(function(){
    const doc = $('#display').html()
    const key = event.key
    const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","=","(",")","*","%"]
    if (accepted_keys.includes(key))
    {
        $('#display').html(doc + key)
    }
    console.log(key)
});

$('#number_equal').click(function(){
    const doc = $('#display').html()

    if ($('#display').html(""))
    {
        $('#display').html("")
    }
    else
    {
        try {
            if (eval(doc) == Infinity)
            {
                $('#display').html("")
                document.getElementById("data_message").style.color = "red"
                $('#data_message').html("Valor Máximo Excedido")
            }
            else
            {
                $('#display').html(eval(doc))
            }
        }
        catch(err)
        {

            if (err.name = "SyntaxError" || "TypeError")
            {
                document.getElementById("data_message").style.color = "red"
                $('#data_message').html("Sintaxe Mal Formada")
                console.log(err.name)
            }
            else
            {
                $('#data_message').html("")
                document.getElementById("data_message").style.color = "red"
                $('#data_message').html("Erro Desconhecido")
                console.log(err.name)
            }

        }

    }
});

$('#number_clear').click(function(){
    const doc = $('#display').html()
    $('#display').html(doc.slice(0,-1))
});

$('#number_clearall').click(function(){
    $('#data_message').html("")
    $('#display').html("")
});

});
});