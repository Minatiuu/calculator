import getJson from "../modules/getJson.js"

export default async function getData(){
    const data1 = await getJson('/data/geral.json')

    setTimeout(function() {
        console.log(data1);
        document.querySelector('#calculator_historic > div').innerHTML = data1.jLog.sintaxe;
        console.log(data1.jLog.sintaxe);
    }, 100)
}