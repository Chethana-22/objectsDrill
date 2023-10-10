export function pairs(obj){
    let resultArray = [];
    for(let key in obj){
        resultArray.push([key, obj[key]]);
    }
    return resultArray;
}

// export function pairs(obj) {
//     return Object.entries(obj);
// }








