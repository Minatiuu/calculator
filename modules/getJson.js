export default async function getJson(jsonFile){
    const fetchJson = await fetch(jsonFile)
    const jsonData = await fetchJson.json();

    return jsonData;
}