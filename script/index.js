"use strict"
$(document).ready(function() {
    $.getJSON('../data/geral.json', function(data){
        //Get and Print texts of buttons with a class "numbers_row"
        $('.numbers_row > button').click(function(){
            const doc = document.getElementById("display").innerHTML
            const input_register = document.getElementById(this.id).innerHTML
            //Not print some buttons and execute some functions
            if (input_register != "C")
            {
                if (input_register != "=")
                {
                    document.getElementById("display").innerHTML = doc + input_register
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
            const doc = document.getElementById("display").innerHTML
            const input_register = document.getElementById(this.id).innerHTML
            document.getElementById("display").innerHTML = doc + input_register
        });
        //Get and Print keys of keyboard
        function SendButton()
        {
            const doc = document.getElementById("display").innerHTML
            const key = event.key
            //Verify if a key is valid
            const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","(",")","*","%"]
            if (accepted_keys.includes(key))
            {
                document.getElementById("display").innerHTML = doc + key
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
            const doc = document.getElementById("display").innerHTML

            //Verify if the display is a empty string
            if (document.getElementById("display").innerHTML != "")
            {
                try {
                    //Verify if the equation is Infinity
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
                    //Error Logs
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
                //If display is a empty string, just return nothing
                return
            }
        
        
        }
        
        //Delete the last charactere of a equation
        function Clear()
        {
            const doc = document.getElementById("display").innerHTML
            document.getElementById("display").innerHTML = doc.slice(0,-1)
        }
        
        //Delete error logs and the display
        function ClearAll()
        {
            document.getElementById("data_message").innerHTML = ""
            document.getElementById("display").innerHTML = ""
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