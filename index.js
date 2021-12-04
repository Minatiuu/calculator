"use strict"

function SendInput(id)
{
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = input_register
    if (document.getElementById("display").innerHTML.indexOf("+"))
    {
        console.log("This is a sum")
    }
}
