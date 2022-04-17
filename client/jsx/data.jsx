import getJson from "/modules/js/getJson.js";

export default async function getData() {
    await getJson('/database/data/geral.json');
}