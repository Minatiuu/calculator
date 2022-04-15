import getJson from "./getJson.jsx";

export default function operators() {
    var historicCount = 0;// Defines the initial value
    const display = document.getElementById('display');
    const dataMessage = document.getElementById('data_message');
    const dataHistoric = $('data_historic > div');
    const calcHistoric = $('calculator_historic > div');

    //Transform the string of display in a instruction
    async function equal() {
        const jsonData = await getJson('../database/data/geral.json');
        const result = eval(display.innerText);

        //Verify if the display is a empty string
        if (display.innerText !== '') {
            function addToHistoric() {
                var count = historicCount += 1;// Increment one to the counter
                const addHistoric =
                    <div>
                        <div>
                            <span id="historic_count">{count}</span>
                        </div>
                        <div>
                            <span>{display.innerText + " = "}</span>
                            <span id="hist_result">{result}</span>
                        </div>
                    </div>
                ;

                dataHistoric.text(display.innerText);
                calcHistoric.append(
                    $(addHistoric.replace(/\s{2,}/g, ""))
                );// Add the display and the result to the historic
            }
            addToHistoric();
            try {
                //Verify if the equation is Infinity
                if (result == Infinity) {
                    dataMessage.innerHTML = jsonData.jLog.maxValue;
                    dataMessage.style.color = 'red';
                    display.innerHTML = result;
                    display.style.color = 'red';
                }
                else {
                    display.style.color = 'red';
                    display.innerText = result;
                }
            }
            catch(err) {
                //Error Logs
                if (err.name = "SyntaxError" || "TypeError") {
                    dataMessage.innerHTML = "";
                    dataMessage.style.color = 'red';
                    dataMessage.innerHTML = jsonData.jLog.sintaxe;
                } else {
                    dataMessage.innerHTML = '';
                    dataMessage.style.color = 'red';
                    dataMessage.innerHTML = jsonData.jLog.unknown;
                }
            }
        }
    }

    //Delete the last charactere of a equation
    function clear() {
        display.innerText = (display.innerText.slice(0,-1));
    }
    //Delete error logs and the display
    function clearAll() {
        dataMessage.innerHTML = "";
        display.innerHTML = "";
        dataHistoric.innerText = "";
    }
    return {
        equal,
        clear,
        clearAll
    }
}