export default async function getJson(jsonFile){
    const fetchJson = await fetch(jsonFile);
    const jsonData = await fetchJson.json();
    if (jsonData != undefined) {
        console.log("Json Carregado!");
        console.log(jsonData);
    } // TEMPORÁRIO PARA FINS DE DESENVOLVIMENTO
    return jsonData;
}