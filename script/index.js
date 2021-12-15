"use strict"
$(document).ready(function() {
    $.getJSON('../data/geral.json', function(data){
        //Get and Print texts of buttons with a class "numbers_row"
        $('.numbers_row > button').click(function(){
            const doc = $('#display').html()
            const input_register = $('#'+this.id).html()
            //Not print some buttons and execute some functions
            if (input_register != "C")
            {
                if (input_register != "=")
                {
                    $('#display').html(doc + input_register)
                }
                else
                {
                    Equal()
                }
            }
            else
            {
                Clear()
            }
        });
        //Get and Print Operators texts 
        $('.flex_divisor > button').click(function(){
            const doc = $('#display').html()
            const input_register = $('#'+this.id).html()
            $('#display').html(doc + input_register)
        });
        //Get and Print keys of keyboard
        function SendButton()
        {
            const doc = $('#display').html()
            const key = event.key
            //Verify if a key is valid
            const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","(",")","*","%"]
            if (accepted_keys.includes(key))
            {
                $('#display').html(doc + key)
            }
            else
            {
                //Special Keys Verification
                switch (key)
                {
                    case "Enter":
                        Equal()
                        break;
                    case "Backspace":
                        Clear()
                        break;

                }
            }
            console.log(key) //TEMP
        }
        
        //Transform the string of display in a instruction
        function Equal()
        {
            const doc = $('#display').html()

            //Verify if the display is a empty string
            if ($('#display').html())
            {
                try {
                    //Verify if the equation is Infinity
                    if (eval(doc) == Infinity)
                    {
                        $('#data_message').html("")
                        $('#data_message').css("color","red")
                        $('#data_message').html("Valor Máximo Excedido")
                    }
                    else
                    {
                        $('#display').html(eval(doc))
                    }
                }
                catch(err)
                {
                    //Error Logs
                    if (err.name = "SyntaxError" || "TypeError")
                    {
                        $('#data_message').html("")
                        $('#data_message').css("color","red")
                        $('#data_message').html("Sintaxe Mal Formada")
                        console.log(err.name) //TEMP
                    }
                    else
                    {
                        $('#data_message').html("")
                        $('#data_message').css("color","red")
                        $('#data_message').html("Erro Desconhecido")
                        console.log(err.name) //TEMP
                    }
        
                }
            }
            else
            {
                //If display is a empty string, just return nothing
                return
            }
        
        
        }
        
        //Delete the last charactere of a equation
        function Clear()
        {
            const doc = $('#display').html()
            $('#display').html(doc.slice(0,-1))
        }
        
        //Delete error logs and the display
        function ClearAll()
        {
            $('#data_message').html("")
            $('#display').html("")
        }
        
        //Call the function if a key of keyboard is pressed
        $(document).keydown(function(){
            SendButton()
        });
        //Call the function if a equal button is pressed
        $('#number_equal').click(function(){
            Equal()
        });
        //Call the function if a C button is pressed
        $('#number_clear').click(function(){
            Clear()
        });
        //Call the function if a CE button is pressed
        $('#number_clearall').click(function(){
            ClearAll()
        });        
    });
});