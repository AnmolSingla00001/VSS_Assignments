//  @description {Create immutable object}
//  1- Not allowing someone to modify
//  2- Not allowing someone to add new details but modify
//  3- Not allowing someone to delete

const getImmutableObj = (function () {
  let actualObj = {
    name: "Anmol Singla",
    organisation: "Infosys Limited",
    objTest: {
      city: "Pune",
    },
  };
  return function () {
    return { ...actualObj };
  };
})();

//  @description {Create a method to show if the following key exists or not}
function checkKeyExistence(objName, keyName) {
  return objName.hasOwnProperty(keyName);
}

//Testing
let obj1 = getImmutableObj();
obj1.name = "Random Name";
let obj2 = getImmutableObj();
// console.log(obj1, obj2);

for (let key in obj1) {
  console.log(key);
}

console.log("name" in obj1.objTest);
