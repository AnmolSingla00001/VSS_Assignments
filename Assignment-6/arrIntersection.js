// You have two array element i.e.
// arr1 = [1,3,5,6,7,9,33,66,22,65,88]
// arr2 = [2,5,7,1,6,9,77,65,88,94,22,54]

// Write an algorithm to find the intersection of these two arrays?


const arr1 = [1,3,5,6,7,9,33,66,22,65,88];
const arr2 = [2,5,7,1,6,9,77,65,88,94,22,54];
var resArr = [];

console.log(arr1);
console.log(arr1.length);
console.log(arr2);
console.log(arr2.length);

if(arr1.length == 0 || arr2.length == 0)
{
  console.log("No Common elememts as one or both the arrays are empty.");
}

let obj_map = {};
arr1.forEach(element => {
    obj_map[element] = false;
});
console.log(obj_map);
arr2.forEach(element => {
    if (obj_map.hasOwnProperty(element)) {
        resArr.push(element);
    }
});
console.log(resArr);
