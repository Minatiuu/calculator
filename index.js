"use strict"

function SendInput(id)
{
    const doc = document.getElementById("display").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = doc + input_register  
}

function Equal()
{
    const doc = document.getElementById("display").innerHTML
    if (document.getElementById("display").innerHTML != "")
    {
        try {
            document.getElementById("display").innerHTML = eval(doc)
        }
        catch(err)
        {
            if (err.name = "SyntaxError" || "TypeError")
            {
                document.getElementById("data_message").innerHTML = ""
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

function ClearAll()
{
    document.getElementById("display").innerHTML = ""
}