import getJson from "/modules/getJson.jsx";

export default async function getData() {
    await getJson('/database/data/geral.json');
}