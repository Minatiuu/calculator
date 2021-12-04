"use strict"

function SendNum(id)
{
    const number_register = document.getElementById(id).innerHTML
    document.getElementById("display").innerHTML = number_register
}