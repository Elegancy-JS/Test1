// let arr = ["1xcvsd", "2aaaaa", "3sdfsd", "4sdf", "adsf"];
// for (let elem in arr) {
//   console.log(arr[elem]);
// }
let propertyBird = [];
let Bird = function (name1, name2, name3) {
  this.name1 = name1;
  this.name2 = name2;
  this.name3 = name3;
};

Bird.prototype.numOfWings = 8;

let andy = new Bird();

for (let prop in andy) {
  // if()
  // console.log(prop);
  // propertyBird.push(prop);
}
// console.log(propertyBird);

////
//private variable
// const getSecret = function () {
//   const secret = "aaa";
//   return function () {
//     return secret;
//   };
// };
// let key = getSecret();
// // console.log(getSecret());
////
// const outer = function () {
//   let a = 3;
//   const inner = function () {
//     a++;
//     console.log(a);
//   };
//   inner();
// };
// outer();
////binding method
// const hero = {
//   name: "John",
//   surname: "Xue",
//   getName: function () {
//     return this.name;
//   },
// };
// const findHisName = hero.getName.bind(hero);

// console.log(hero.getName());
// console.log(findHisName());
//////////
// const str = "  aaaa      bbbbbb  %&^*%&^$*^ xcv     ";
// const reverse = function () {
//   let str1 = str.trim();
//   let arr1 = str1.split("");
//   console.log(arr1);
//   let arr2 = [];
//   arr1.forEach((ele) => {
//     if (ele !== " ") {
//       arr2.push(ele);
//     }
//   });
//   console.log(arr2);
//   let str3 = arr2.reverse().join("");
//   console.log(str3);
//   let result = str3[0].toUpperCase() + str3.slice(1);
//   console.log(result);
// };
// reverse(str);
/////
const arr = [1, 2, 5, 1000, 0, -34, 2.45357653];

let result1 = arr.map((elem) => elem * 2);
let result2 = arr.filter((elem) => elem >= 2);
let result3 = arr.reduce((elem) => 0 + elem);

console.log(result1);
console.log(result2);
console.log(result3);
