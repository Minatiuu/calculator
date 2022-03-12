import getJson from "./getJson.js"
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
            equal()
        }
    } else{
        clear()
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
            sendButton(keyEvent)
        })

        //Call the function if a equal button is pressed
        document.getElementById('number_equal').addEventListener('click', () => {
            equal()
        })

        //Call the function if a C button is pressed
        document.getElementById('number_clear').addEventListener('click', () => {
            clear()
        })

        //Call the function if a CE button is pressed
        document.getElementById('number_clearall').addEventListener('click', () => {
            clearAll()
        })

//Get and Print keys of keyboard
function sendButton(keyEvent){
    const display = document.getElementById('display').innerHTML
    const key = keyEvent.key

    //Verify if a key is valid
    const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","(",")","*","%"]
    if (accepted_keys.includes(key)){
        document.getElementById('display').innerHTML = display + key
    }else{
        //Special Keys Verification
        switch (key){
            case "Enter":
                equal()
                break;
            case "Backspace":
                clear()
                break;
        }
    }
    console.log(key) //TEMP
}

//Transform the string of display in a instruction
function equal(){
    const display = document.getElementById('display').innerHTML

    //Verify if the display is a empty string
    if (document.getElementById('display').innerHTML !== ''){
        const dataMessage = document.getElementById('data_message')
        try {
            //Verify if the equation is Infinity
            if (eval(display) == Infinity){
                dataMessage.innerHTML = ''
                dataMessage.style.color = 'red'
                dataMessage.innerHTML = "Valor Máximo Excedido"
            }
            else{
                document.getElementById('display').innerHTML = eval(display)
            }
        }
        catch(err){
            //Error Logs
            if (err.name = "SyntaxError" || "TypeError"){
                dataMessage.innerHTML = ""
                dataMessage.style.color = "red"
                dataMessage.innerHTML = "Sintaxe Mal Formada"
                console.log(err.name) //TEMP
            } else{
                dataMessage.innerHTML = ''
                dataMessage.style.color = "red"
                dataMessage.innerHTML = "Erro Desconhecido"
                console.log(err.name) //TEMP
            }
        }
    } else{
        //If display is a empty string, just return nothing
        return
    }
}

    //Delete the last charactere of a equation
    function clear(){
        const display = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = (display.slice(0,-1))
    }

    //Delete error logs and the display 
    function clearAll(){
        document.getElementById('data_message').innerHTML = '';
        document.getElementById('display').innerHTML = '';
    }
}