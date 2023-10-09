import { mapObject } from "./mapObject.js";

function cb(key){
    return key + 1;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(mapObject(testObject,cb));