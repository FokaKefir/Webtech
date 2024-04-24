//példa egyszerű npm modul használatára

//a modul megszámolja 
import {default as countArray} from 'count-array-values';

const arr = ["a","b","c","a","b","a"];

console.log(countArray(arr));