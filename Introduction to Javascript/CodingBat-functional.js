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

console.log(rightDigit([100,205,304]))


