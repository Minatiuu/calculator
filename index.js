"use strict"

function SendInput(id)
{
    const doc = document.getElementById("display").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = doc + input_register  
}

function SendButton(event)
{
    const doc = document.getElementById("display").innerHTML
    const key = event.keyCode
    switch (key)
    {
        case 8:
            //Key_BackSpace
            Clear()
            break;
        case 13:
            //Key_Enter
            Equal()
            break;
        case 43:
            //Key_plus
            document.getElementById("display").innerHTML = doc + "+";
            break;
        case 46:
            //Key_Delete
            ClearAll()
            break;
        case 48:
            //Key_0
            document.getElementById("display").innerHTML = doc + "0";
            break;
        case 49:
            //Key_1
            document.getElementById("display").innerHTML = doc + "1"
            break;
        case 50:
            // Key_2
            document.getElementById("display").innerHTML = doc + "2"
            break;
        case 51:
            //Key_3
            document.getElementById("display").innerHTML = doc + "3"
            break;
        case 52:
            // Key_4
            document.getElementById("display").innerHTML = doc + "4"
            break;
        case 53:
            //Key_5
            document.getElementById("display").innerHTML = doc + "5"
            break;
        case 54:
            // Key_6
            document.getElementById("display").innerHTML = doc + "6"
            break;
        case 55:
            //Key_7
            document.getElementById("display").innerHTML = doc + "7"
            break;
        case 56:
            // Key_8
            document.getElementById("display").innerHTML = doc + "8"
            break;
        case 57:
            //Key_9
            document.getElementById("display").innerHTML = doc + "9"
            break;
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
