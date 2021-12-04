"use strict"

function SendInput(id)
{
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = input_register
}