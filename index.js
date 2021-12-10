"use strict"
module.exports = './index.js';

function SendInput(id)
{
    const doc = document.getElementById("display").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = doc + input_register
}

function SendButton(event)
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