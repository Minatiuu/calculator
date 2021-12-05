"use strict"

function SendInput(id)
{
    const doc = document.getElementById("number_1").innerHTML
    const input_register = document.getElementById(id).innerHTML
    document.getElementById("number_1").innerHTML = doc + input_register
}

function Equal()
{
    const doc = document.getElementById("number_1").innerHTML
    if (doc.includes("+"))
    {
        console.log("This is a sum")
        return Number(doc)
    }
    else
    {
        console.log("Not is a sum")
    }
}
