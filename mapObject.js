export function mapObject(obj, cb) {
    var result = {};
    for (let key in obj){
        result[key] = cb(obj[key]);
    } 
    return result;
}

