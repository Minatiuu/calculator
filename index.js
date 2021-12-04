"use strict"
let number_input;
let number_input2;

function SendNum(id)
{
    const number_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = number_register
}