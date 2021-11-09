// let a = 2;
// function fnOuter() {
//   let a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// // fnOuter()();
// let b = fnOuter();

// function outest() {
//   let a = 10;
//   b();
// }

// outest();

// let a = 10;
// var b = 10;
// c = 10;
// function func1() {
//   let a = 20;
//   var b = 20;
//   c = 20;
//   console.log(a, b, c);
// }

// console.log(fnA);
// var fnA = () => {
//   console.log("Arrow Function");
// };
// console.log(fnA());
// fnA();

// console.log(a, b, c); //10,10,10
// func1(); //20,20,20
// console.log(a, b, c); //10,10,20

// // console.log(a, b, c, d); //
// console.log(a); // Error Cannot Access Before Initialiasation
// console.log(b); // Undefined
// // console.log(c); // Error Not Defined
// console.log(d); // Error Cannot Access Before Initialiasation
// let abc = "123";
// let a = 10;
// var b = 10;
// c = 10;
// const d = 10;

// const a = [1, 2, 3, 4];
// a.push(5);
// console.log(a);

for (var index = 0; index < 5; index++) {
  //   let a = index;
  setTimeout(() => {
    console.log(index);
    // console.log(a);
  }, 0);
  // console.log(a);
}

// for (var index = 0; index < 5; index++) {
//   function inner(index) {
//     setTimeout(() => {
//       console.log(index);
//     }, 1000);
//   }
//   inner(index);
// }
