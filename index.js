"use strict"

function SendInput(id)
{
    const doc = document.getElementById("number_1").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = doc + input_register
}

function SymbolAdd(id)
{
    const doc = document.getElementById("number_1").innerHTML
    doc = doc + id
}
