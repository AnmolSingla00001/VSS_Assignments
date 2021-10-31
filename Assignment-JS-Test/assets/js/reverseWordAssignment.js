function revWords(inputStr) {
  console.log(inputStr.slice(inputStr.length, 1));
}

// revWords("Anmol Singla");

let a = "Anmol Sing123la";
console.log(a.slice(a.length, 1));
console.log(a.substring(a.length, 1));
console.log(a.substr(1, a.length * -1));
aArr = a.split("");
console.log(aArr);
revStr = "";
for (let index = 0, prevNumInd = 0; index < aArr.length; index++) {
  if (!isNaN(aArr[index])) {
    console.log(aArr[index]);
    for (let i = index - 1; i >= prevNumInd; i--) {
      revStr = revStr.concat(aArr[i]);
    }
    prevNumInd = index;
    revStr = revStr.concat(aArr[prevNumInd]);
  }
}
console.log(revStr);
