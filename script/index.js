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
        document.getElementById("display").innerHTML = ""
    }
    else
    {
        try {
            if (eval(doc) == Infinity)
            {
                document.getElementById("data_message").innerHTML = ""
                document.getElementById("data_message").style.color = "red"
                document.getElementById("data_message").innerHTML = "Valor Máximo Excedido"
            }
            else
            {
                document.getElementById("display").innerHTML = eval(doc)
            }
        }
        catch(err)
        {

            if (err.name = "SyntaxError" || "TypeError")
            {
                document.getElementById("data_message").style.color = "red"
                document.getElementById("data_message").innerHTML = "Sintaxe Mal Formada"
                console.log(err.name)
            }
            else
            {
                document.getElementById("data_message").innerHTML = ""
                document.getElementById("data_message").style.color = "red"
                document.getElementById("data_message").innerHTML = "Erro Desconhecido"
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