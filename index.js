"use strict"

function SendInput(id)
{
    const doc = document.getElementById("number_1").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = doc + input_register
}

function SymbolAdd(id)
{
    id = Symbol(id)
    const doc = document.getElementById("number_1").innerHTML
    const operator = id
    document.getElementById("number_1").innerHTML = doc + toString(id)
}
