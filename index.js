"use strict"
let collector;
let state_display = 0;

function SendInput(id)
{
    if (state_display == 0)
    {
        const doc = document.getElementById("display").innerHTML
        const input_register = document.getElementById(id).innerHTML
        document.getElementById("display").innerHTML = doc + input_register
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
        const doc = document.getElementById("display").innerHTML
        collector = id
        document.getElementById("display").innerHTML = doc + string_op
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
        const doc = document.getElementById("display2").innerHTML
        const input_register = document.getElementById(id).innerHTML
        document.getElementById("display2").innerHTML = doc + input_register
    }
}

