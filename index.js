"use strict"

function SendInput(id)
{
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = input_register
    if (document.getElementById("number_1").innerHTML.indexOf("+"))
    {
        console.log("This is a sum")
    }
}
