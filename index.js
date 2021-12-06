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
    return document.getElementById("display").innerHTML = eval(doc)
}

function ClearAll()
{
    document.getElementById("display").innerHTML = ""
}

