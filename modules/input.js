import operators from "/modules/operators.js"
const operatorsVar = operators()

export default function input() {
    //Get and Print keys of keyboard
    function sendButton(keyEvent) {
        const display = document.getElementById('display').innerHTML
        const key = keyEvent.key

        //Verify if a key is valid
        const accepted_keys = ["0","1","2","3","4","5","6","7","8","9","-","+","(",")","*","%"]
        if (accepted_keys.includes(key)) {
            document.getElementById('display').innerHTML = display + key
        } else {
            //Special Keys Verification
            switch (key) {
                case "Enter":
                    operatorsVar.equal()
                    break;
                case "Backspace":
                    operatorsVar.clear()
                    break;
            }
        }
        console.log(key) //TEMP
    }
    return {
        sendButton
    }
}