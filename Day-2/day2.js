// const array = ["a", "b", "c"];
// const arrayEntries = array.entries();

// for (const element of arrayEntries) {
//   console.log(element);
// }

// let a = [1,2,3,4,5,6,7,8,9,'p']
// console.log(a.fill(4,1,-4));

// let tempGirls = Array(5).fill("girl",0,2);
// console.log(tempGirls);

// function sayHi() {
//     console.log( "Hello" );
//   };
//   sayHi()

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// let user = { name: "John" };

// let admin = Object.assign(user);
// user.name="sk";
// for (let key in admin) {
//   console.log( key );
//   console.log(admin[key] );
// }
// console.log(user["name"]+" "+admin.name);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = structuredClone(user);

// console.log(user.sizes === clone.sizes );

// console.log( user.sizes === clone.sizes ); // false, different objects

// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log(clone);
// console.log(user);

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log( user.name ); // leads to an error
//   }

// };

// let admin =structuredClone(user);
// // user = null; // overwrite to make things obvious

// console.log(admin.name);

// function User(name,isAdmin) {
//   this.name = name;
//   this.isAdmin = isAdmin;
//   this.age=22
//   return {name,isAdmin};
// }

// let one = new User("keethi",false);
// let two = new User("surya",true)

// console.log(one);
// console.log(two);

// let user = {
//   // address:"sjlk"
//   age:null
// };

// console.log(user.age?.isAdmin);

// let user = { // belongs to another code
//   id: 1
// };

// let id = Symbol("id");
// let id2 = Symbol("id");

// user[id] = 1;

// console.log( id.description+" "+user[id]);
// let one = new user();
// console.log(+user);

//
// "use strict"
// const obj = {
//   prop: 42
// };

// Object.freeze(obj);

// obj.prop = 33;
// // Throws an error in strict mode

// console.log(obj.prop);
// expected output: 42

// array.join

// let arr = [1,2,3,4,6]
// console.log(arr.join('  "/" '));
// console.log(arr);

// objet from entries
// const entries = new Map();
// entries.set('foo', 'bar')
// entries.set('baz', 42)
// let obj = Object.fromEntries(entries);
// console.log(obj);

// console.log(typeof entries);

// console.log(typeof typeof 1);

// var obj = object;
// console.log(typeof obj === "object");

// json stringify
// const person = {
//   name:"John",
//   address:{
//       street:"abc",
//       state:"Q",
//       pincode : 641002
//   }
// }

// let {address:{state:st}} = person;

// console.log(JSON.stringify(person,["address","state",'pincode','name'],4));

// json parseInt

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log( user.friends );

// objects
// let user = {
//   name:'surya',
//   age:20
// }
// ;
// console.log(user);

// * user object creation
// let user1 = {
//   name1: "John",
//   age1: 30
// };

//! Dont change property

// let user2 = {
//   name:"sk",
//   age:22
// }
// Object.assign(user1,user2,{name2:'ss',age2:'20'});
// console.log( user1 )

// let arr=[1,2,3,4,5,[6,7,8]];
// let user={
//   'name':"Keeerthivasan",
//   'age':21,
// }
// let admin = Object.assign({},arr);
// // let admin = Object.entries(arr)
// console.log(admin)

// var myArray = []; // Creating a new array object
// myArray['a'] = 200; // Setting the attribute a to 200
// myArray['b'] = 300;
// // console.log(myArray['a']);
// for(let key of Object.keys(myArray))
//   console.log(myArray[key]);

//? functions

// let fun = (...args) => {
//   let sum=0;
//   for(let a of args)
//     sum+=a;

//   console.log(sum);
// }

// fun(1,4,5)
// fun(4,6,3)

// let rest = (one, two, ...all) => {
//   console.log(one, two);
//   let a = all.reduce((prevVal, currVal) => prevVal + currVal, "");

//   return a;
// };

// let result = rest("surya", "kumar", "a", "b", "c", "d");
// console.log(result);

// let arr1 = [1,15,4,8]
// let arr2 = [22,5,44,7,0]
// console.log(Math.max(...arr1,...arr2));

// TODO merge arr
// let one = [5,4,3];
// let two = [0,1,2];
// let three = [...one]+","+[...two]
// console.log(three);

//* String to arrThere’d be an error without blocks

// let a = "100000";
// console.log([...a]);
// console.log(Array.from(a));

/* 
! copy arr and obj also same
! (normal copy is using reference to copy but 
! spread copy only copy the content not reference)
*/

// let a = [0,1,2];
// //? normal copy -> b=a
// //? Spread copy
// let b = [...a];
// b[3]=3;
// b.forEach((ele) => {
//   console.log(ele);
// })
// console.log(a);

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count+=5;
//   };
// }

// let counter = makeCounter();

// console.log(counter() ); // 0
// console.log(counter() ); // 1
// console.log(counter() ); // 2

//? variables
// var a=0;
// var a=1;
// console.log(a);
// console.log(a);
// var a = 6;
// console.log(a);

// function variables(){
//    one = {a:1,b:2};
//   // console.log(one);
// }
// variables()
// console.log(one);

//! immediately-invoked function expressions” (abbreviated as IIFE).

// (function () {
//   console.log("function executed, without calling");
// })();

//* global objects
// globalThis.obj = {
//   name:'surya',
//   age:22
// }

// function a(){
//   console.log(obj.name);
// }
// a()

//? function create using "new" new function turn any string into function

// let a = new Function('a,b','console.log(a+b)') //a,b is arguments
// a(1,5);
// let b = new Function('c','d','console.log(c-d)')
// b(7,3)
// let str = "i like coding"
// let fun = new Function(console.log(str))
// fun();

//! setTimeout and setInterval
// console.log(console.log(1) || console.log(2));

// var i = 5;
// let s = (a,b)  => {
//     console.log(a+b);
// }
// let t = setTimeout(s,3000,22,44)

// setTimeout(alert("hi"),4000)
//? increment
// let id = setInterval(() => {
//   i++;
//   console.log(i);
//   if(i==1000)
//     clearInterval(id);
// }, 1);

//{address:{street:s}, address:ad}
//app.get("/index",()=>{})

// ! function binding
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(user.sayHi,1000) //* not working
// setTimeout(() => {
//   user.sayHi();
// }, 1000);

//? or using function binding
// let bind = user.sayHi.bind(user);
// setTimeout(bind,2000);

//! create function binding
// function mul(a,b)
// {
//     return a*b;
// }
// let double = mul.bind(null,2);
// console.log(double(3));
// console.log(double(4));

//! call, apply, bind
// let obj = {
//   name: "sk",
//   age: 20,
// };
// let one = {
//   name: "saran",
//   age: null,
// };

// function sayName(text,age) {
//   console.log(` ${this.name??text}, age is ${this.age??age}`);
// }
// let fun = sayName.call(obj, "hello", 20);
// let fun2 = sayName.apply(one, ["hello", 22]);
// let fun3 = sayName.bind(null,"surya",21);
// fun3();

'use strict'

//* Object.defineProperty
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
console.log(user);