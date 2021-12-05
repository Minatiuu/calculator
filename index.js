"use strict"
let collector;
let state_display = 0;
let display_1;
let display_3;

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
        state_display = 2
        const doc = document.getElementById("display3").innerHTML
        const input_register = document.getElementById(id).innerHTML
        document.getElementById("display3").innerHTML = doc + input_register
    }      
}
    

function SymbolAdd(id)
{
    if (state_display == 0)
    {
        collector = id
        document.getElementById("display2").innerHTML = id
        state_display = 1

    }
    else
    {
        state_display = 1
    }
}

function Equal()
{
    if (state_display == 0)
    {
        state_display = 0
    }
    else
    {
        display_1 = document.getElementById("display").innerHTML
        display_3 = document.getElementById("display3").innerHTML

        const number_1 = Number(display_1)
        const number_2 = Number(display_3)

        if (collector == '+')
        {
            ClearAll()
            document.getElementById("display").innerHTML = number_1 + number_2
        }
        if (collector == '-')
        {
            ClearAll()
            document.getElementById("display").innerHTML = number_1 - number_2
        }
        if (collector == '/')
        {
            ClearAll()
            document.getElementById("display").innerHTML = number_1 / number_2
        }
        if (collector == '*')
        {
            ClearAll()
            document.getElementById("display").innerHTML = number_1 * number_2
        }
    }
}

function ClearAll()
{
    document.getElementById("display").innerHTML = ""
    document.getElementById("display2").innerHTML = ""
    document.getElementById("display3").innerHTML = ""
    state_display = 0
}

function Clear()
{
    switch (state_display)
    {
        case 0:
            document.getElementById("display").innerHTML = ""
            state_display = 0
            break;

        case 1:
            document.getElementById("display2").innerHTML = ""
            state_display = 0
            break;
        
        case 2:
            document.getElementById("display3").innerHTML = ""
            state_display = 2
            break;

        default:
            ClearAll()
            document.getElementById("display").innerHTML = "Error"
            state_display = 0
    }

}

