let arr = [1,2,3,4];

//for each
//iterate the array
arr.forEach((val) => {
    console.log(val);
})

// console.log(arr);

//map
//return new arr
let new_arr = arr.map((val) => {
    return val*2;
});
console.log(new_arr);

//filter
//return array
//return true to keep in new array
var ans = arr.filter((val) => {
    if(val > 2) return true;
});
console.log(ans);

//find
//return first value else underfined
let res = arr.find((val) => {
    if(val > 2) return val;
});
console.log(res);

//indexOf
//-1 not found else index
console.log(arr.indexOf(2));