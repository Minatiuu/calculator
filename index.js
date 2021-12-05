"use strict"
let collector;

function SendInput(id)
{
    const doc = document.getElementById("number_1").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = doc + input_register
}

function SymbolAdd(id)
{
    const string_op = id
    id = Symbol(id)
    const doc = document.getElementById("number_1").innerHTML
    collector = id
    document.getElementById("number_1").innerHTML = doc + string_op
}

