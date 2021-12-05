"use strict"
let collector;
let state_display = 0;

function SendInput(id)
{
    if (state_display == 0)
    {
        const doc = document.getElementById("").innerHTML
        const input_register = document.getElementById(id).innerHTML
        document.getElementById("number_1").innerHTML = doc + input_register
    }
    else
    {
        state_display = 1
    }
    
}

function SymbolAdd(id)
{
    if (state_display == 0)
    {
        const string_op = id
        id = Symbol(id)
        const doc = document.getElementById("number_1").innerHTML
        collector = id
        document.getElementById("number_1").innerHTML = doc + string_op
        state_display = 1
    }
    else
    {
        state_display = 1
    }
}

function SendInput2()
{
    if (state_display == 0)
    {
        state_display = 1
    }
    else
    {
        
    }
}

