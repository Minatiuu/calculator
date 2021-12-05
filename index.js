"use strict"

function SendInput(id)
{
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = input_register

}

function Equal()
{
    if (document.getElementById("number_1").innerHTML.indexOf("+"))
    {
        console.log("This is a sum")
    }
    else
    {
        console.log("Not is a sum")
    }
}
