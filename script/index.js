"use strict"
$(document).ready(function() {
    $.getJSON('../data/geral.json', function(data){
        $('.numbers_row > button').click(function(){
            const doc = document.getElementById("display").innerHTML
            const input_register = document.getElementById(this.id).innerHTML
            if (input_register != "=")
            {
                document.getElementById("display").innerHTML = doc + input_register
            }
            else
            {
                Equal()
            }
        });
        $('.flex_divisor > button').click(function(){
            const doc = document.getElementById("display").innerHTML
            const input_register = document.getElementById(this.id).innerHTML
            document.getElementById("display").innerHTML = doc + input_register
        });
        
        function SendButton()
        {
            const doc = document.getElementById("display").innerHTML
            const key = event.key
            const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","=","(",")","*","%"]
            if (accepted_keys.includes(key))
            {
                document.getElementById("display").innerHTML = doc + key
            }
            console.log(key)
        }
        
        function Equal()
        {
            const doc = document.getElementById("display").innerHTML
        
            if (document.getElementById("display").innerHTML != "")
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
            else
            {
                return document.getElementById("display").innerHTML = ""
            }
        
        
        }
        
        function Clear()
        {
            const doc = document.getElementById("display").innerHTML
            document.getElementById("display").innerHTML = doc.slice(0,-1)
        }
        
        function ClearAll()
        {
            document.getElementById("data_message").innerHTML = ""
            document.getElementById("display").innerHTML = ""
        }
        
        $(document).keydown(function(){
            SendButton()
        });
        
        $('#number_equal').click(function(){
            Equal()
        });
        
        $('#number_clear').click(function(){
            Clear()
        });
        
        $('#number_clearall').click(function(){
            ClearAll()
        });        
    });
});