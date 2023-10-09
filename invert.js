export function invert(obj) {
    let invertedObject = {};
    for (let key in obj){
        invertedObject[obj[key]] = key;
    }    
    return invertedObject;
}