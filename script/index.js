import getJson from "/modules/getJson.js"
import operators from "/modules/operators.js"
import input from "/modules/input.js"

const operatorsVar = operators()
const inputVar = input()

export default function startCalculator() {

const data1 = getJson('./data/geral.json')

//Get and Print texts of buttons with a class "numbers_row"
$('.numbers_row > button').on('click', (me) => {
    //Not print some buttons and execute some functions
    const inputRegister = document.getElementById(me.target.id).innerText
    console.log(me.target.id)

    if (inputRegister != "C"){
        if (inputRegister != "="){
            document.getElementById('display').innerHTML += inputRegister
            console.log(inputRegister)
        } else{
            operatorsVar.equal()
        }
    } else{
        operatorsVar.clear()
    }
})

//Get and Print Operators texts 
$('.flex_divisor > button').on('click', (me) => {
        const inputRegister = document.getElementById(me.target.id).innerText
        console.log(me.target.id)
        document.getElementById('display').innerHTML += inputRegister
    })
    
    //Call the function if a key of keyboard is pressed
    document.addEventListener('keydown', (keyEvent) => {
        inputVar.sendButton(keyEvent)
    })

    //Call the function if a equal button is pressed
    document.getElementById('number_equal').addEventListener('click', () => {
        operatorsVar.equal()
    })

    //Call the function if a C button is pressed
    document.getElementById('number_clear').addEventListener('click', () => {
        operatorsVar.clear()
    })

    //Call the function if a CE button is pressed
    document.getElementById('number_clearall').addEventListener('click', () => {
        operatorsVar.clearAll()
    })
}