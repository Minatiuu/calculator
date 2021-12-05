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
        const string_op = id
        id = Symbol(id)
        const doc = document.getElementById("display").innerHTML
        collector = id
        document.getElementById("display2").innerHTML = string_op
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

        const display_finalmore = Number(display_1) + Number(display_3)
        const display_finalloss = Number(display_1) - Number(display_3)
        const display_finalmult = Number(display_1) * Number(display_3)
        switch (collector)
        {
            case Symbol("+"):
                ClearAll()
                document.getElementById("display").innerHTML = display_finalmore
                break;
               
            case Symbol("-"):
                ClearAll()
                document.getElementById("display").innerHTML = display_finalloss
                break;

            case Symbol("*"):
                ClearAll()
                document.getElementById("display").innerHTML = display_finalmult
                break;

            default:
                ClearAll()
                document.getElementById("data_message").innerHTML = "Error"
            
        }
        return display_final
        
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

