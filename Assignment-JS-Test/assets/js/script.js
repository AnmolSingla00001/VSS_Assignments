// let x = 34;

// function fnTypeOf(input) {
//   return typeof input;
// }

// console.log("The type of x is - " + typeof x);

// console.log(fnTypeOf(34));
// console.log(fnTypeOf("34"));
// console.log(fnTypeOf(null));
// console.log(fnTypeOf({}));
// ====================================================

let let1;
var var1;
// const c1;
let let2 = "let2";
var var2 = "var2";
const const2 = "const2";

console.log(let1);
console.log(var1);
// console.log(c1);
console.log(let2);
console.log(var2);
console.log(const2);

// console.log(a3);
// console.log(b3);
// console.log(c3);
// console.log(a4);
// console.log(b4);
// console.log(c4);

function fnSampleFunc(x) {
  let let3;
  var var3;
  // const c3;
  let let4 = "let4";
  var var4 = "var4";
  const const4 = "const4";

  let1 = "A" + x;
  var1 = "B" + x;
  // c1 = 'C' + x;

  console.log(let1);
  console.log(var1);
  // console.log(c1);
  console.log(let2);
  console.log(var2);
  console.log(const2);

  console.log(let3);
  console.log(var3);
  // console.log(c3);
  console.log(let4);
  console.log(var4);
  console.log(const4);

  function fnInnerSampleFunc(y) {
    let1 = "A" + y;
    var1 = "B" + y;
    // c1 = 'C' + y;

    console.log(let1);
    console.log(var1);
    // console.log(c1);
    console.log(let2);
    console.log(var2);
    console.log(const2);

    console.log(let3);
    console.log(var3);
    // console.log(c3);
    console.log(let4);
    console.log(var4);
    console.log(const4);
  }
  fnInnerSampleFunc("TestInnerCall");
}

fnSampleFunc("TestOne");
// fnInnerSampleFunc("TestOuterCall");
