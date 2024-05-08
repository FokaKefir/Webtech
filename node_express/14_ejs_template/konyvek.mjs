import { readFileSync } from 'fs';

function init(){
  try {
  
    let jsonFile = readFileSync('./adatok/konyvek.json',{encoding: 'utf-8'});
    return JSON.parse(jsonFile);
  
  }catch(err){
    console.log(`Nem sikerült megnyitni: ${err.message}`);
    return null;
  }
}

const konyvek = init();

export default konyvek; 
