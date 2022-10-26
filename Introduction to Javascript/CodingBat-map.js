function word0(strings){
    let map = new Map();
    for(const string of strings){
        map.set(string,0);
    }
    return map;
}

function wordCount(strings){
    let map = new Map();
    for (const string of strings) {
         if(!map.has(string)){
            map.set(string, 1)
         }else{
            let count = map.get(string)
            map.set(string, count+1)
         }
    }
    return map;
}

function wordMultiple(strings){
    let map = new Map();
    for (const string of strings) {
         if(!map.has(string)){
            map.set(string, false)
         }else{
            let count = map.get(string)
            map.set(string, true)
         }
    }
    return map;
}
console.log(word0(["a", "b", "a", "b"]));
console.log(wordCount(["a", "a", "b", "c"]))
console.log(wordMultiple(["a", "b", "a", "c", "b"]))