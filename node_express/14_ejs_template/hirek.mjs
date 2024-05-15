import { readFileSync } from 'fs';

function init () {
    try {
        let jsonFile = readFileSync('./adatok/hirek.json', {encoding: 'utf-8'});
        return JSON.parse(jsonFile);
    } catch (err) {
        console.error(`Nem sikerult megnyitni: ${err.message}`)
        return [];
    }
}

const hirek = init()
export default hirek;