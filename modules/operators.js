import getJson from "./getJson.js"

export default function operators(){
    
    //Transform the string of display in a instruction
    async function equal(){
        const jsonData = await getJson('./data/geral.json')
        const display = document.getElementById('display').innerHTML

        //Verify if the display is a empty string
        if (document.getElementById('display').innerHTML !== ''){
            const dataMessage = document.getElementById('data_message')
            try {
                //Verify if the equation is Infinity
                if (eval(display) == Infinity){
                    dataMessage.innerHTML = ''
                    dataMessage.style.color = 'red'
                    dataMessage.innerHTML = jsonData.jLog.maxValue
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
                    dataMessage.innerHTML = jsonData.jLog.sintaxe
                } else{
                    dataMessage.innerHTML = ''
                    dataMessage.style.color = "red"
                    dataMessage.innerHTML = jsonData.jLog.unknown
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
    return {
        equal,
        clear,
        clearAll
    }
}