import getJson from "./getJson.js";

export default function operators(){
    var historicCount = 0;// Defines the initial value

    //Transform the string of display in a instruction
    async function equal(){
        const jsonData = await getJson('../database/data/geral.json');
        const display = document.getElementById('display').innerHTML;
        const result = eval(display);

        //Verify if the display is a empty string
        if (document.getElementById('display').innerHTML !== ''){
            const dataMessage = document.getElementById('data_message');

            function addToHistoric() {
                var count = historicCount += 1;// Increment one to the counter
                const addHistoricSpan = `
                    <div>
                        <div>
                            <span id="historic_count">${count}</span>
                        </div>
                        <div>
                            <span>${display + " = "}</span>
                            <span id="hist_result">${result}</span>
                        </div>
                    </div>
                `;

                $('div#data_historic > div').text(display);
                $('section#calculator_historic > div').append(
                    $(addHistoricSpan.replace(/\s{2,}/g, ""))
                );// Add the display and the result to the historic
            }
            addToHistoric();
            try {
                //Verify if the equation is Infinity
                if (result == Infinity){
                    dataMessage.innerHTML = ''
                    dataMessage.style.color = 'red'
                    dataMessage.innerHTML = jsonData.jLog.maxValue
                }
                else{
                    document.getElementById('display').innerHTML = result
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
        $('div#data_historic > div').text('');
    }
    return {
        equal,
        clear,
        clearAll
    }
}