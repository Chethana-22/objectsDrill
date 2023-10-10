export function keys(obj){
    let resultArr = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            resultArr.push(key);
        }
    }
    return resultArr;
}

// export function keys(obj){
//     return Object.keys(obj);
// }