let a = [1, 2, 3, "a", ["x", "y", "z"], { key1: "Value1" }];
const countArray = [];
console.log(a);
console.log(a.length);
console.log(a[4]);

a.forEach((element) => {
  if (countArray.length == 0 && a.length != 0) {
    countArray.push(1);
  }
  console.log(element);
  if (element.isArray) {
    element.array.forEach((innerElement) => {
      if (countArray.length == 0) {
        countArray.push(1);
      }
      console.log(innerElement);
      countArray.push(countArray[countArray.length - 1] + 1);
    });
  } else {
    countArray.push(countArray[countArray.length - 1] + 1);
  }
});
console.log(countArray);

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log(a.toString());
console.log(a.join("|"));
console.log(a.pop());

const emptyArr = [];
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);

console.log(a);
console.log("splicing", a[1]);
a.splice(1, 1, "SplicedElement");
console.log(a);
