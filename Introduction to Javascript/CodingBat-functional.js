// Doubling
function doubling(arr){
    let finalarr = [];
for (let index = 0; index < arr.length; index++) {
   finalarr.push((arr[index])*2)
}
return finalarr;

}

//doubling console.log(doubling([1,2,3,4]));

// copies3
function copies3(arr){
    let finalarr = [];
for (let index = 0; index < arr.length; index++) {
    finalarr.push(arr[index],arr[index],arr[index]);
}
    return finalarr;
}

console.log(copies3(["popsmoke","Kaiyan","James"]));

function rightDigit(arr){
    let finalarr = [];
    for (let index = 0; index < arr.length; index++) {
        finalarr.push((arr[index])%10);
    }
    return finalarr
}

function square(array){
    let finalarr = [];
    for (let index = 0; index < array.length; index++) {
    finalarr.push((array[index])*2);        
    }
    return finalarr;
}

console.log(square([1, 2, 3]));

//console.log(rightDigit([100,205,304]))


