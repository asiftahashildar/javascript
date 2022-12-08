// Array Methods :-
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// flatMap()  : The flatMap() method is a combination of flat() and map() methods. 
// 	  This method initially maps each array element through a mapping function, then flatten up the array with depth value as 1.

// Ex - 
// 1) var arr=[2,4,6,8];  
// 	var array = arr.flatMap(x=>[[x/2]]);
//      	console.log(array );
// o/p--> 1,2,3,4

// 2) var arr1=['a','b','c','d'];  
//      var arr2=[1,2,3,4];  
// 	var newArr=arr1.flatMap((arr1,index)=>[arr1,arr2[index]]); //It will map and flatten arr1 and arr2.  
// 	console.log(newArr);  
// o/p-->a,1,b,2,c,3,d,4

// 3)var arr1=['a','b','c','d'];  
//      var arr2=[1,2,3,4];  
// 	var newArr=arr2.flatMap((arr2,index)=>[arr2,arr1[index]]); //It will map and flatten arr1 and arr2.  
// 	console.log(newArr);
// o/p--> [1, 'a', 2, 'b', 3, 'c', 4, 'd']

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// fill() : The JavaScript array fill() method fills the elements of the given array with the specified static values. 
//            This method modifies the original array. It returns undefined, if no element satisfies the condition.

// Ex - 
// 1) var arr=["AngularJS","Node.js","JQuery"];  
// 	var result=arr.fill("Bootstrap");  
//                     console.log(result)
// o/p--> ['Bootstrap', 'Bootstrap', 'Bootstrap']

// 2)var arr=["AngularJS","Node.js","JQuery"];  
// 	var result=arr.fill("Bootstrap",0,1);  
//                     console.log(result)
// o/p--> ['Bootstrap', 'Node.js', 'JQuery']

// 3)var arr=["AngularJS","Node.js","JQuery"];  
// 	var result=arr.fill("Bootstrap",2,3);  
//                     console.log(result)
// o/p--> ['AngularJS', 'Node.js', 'Bootstrap']

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// find() : The JavaScript array find() method returns the first element of the given array that satisfies the provided function condition.

// Ex - 
// 1) var arr=[5,22,19,25,34];  
// 	var result=arr.find(x=>x>20);  
// 	console.log(result)

// 2) function isPrime(value, index, arr) {  
//   var start = 2;  
//   while (start <= Math.sqrt(value)) {  
//     if (value % start++ < 1) {  
//       return false;  
//     }  
//   }  
//   return value > 1;  
// }  
// console.log([8, 4, 7, 22].find(isPrime)); 
// o/p-->7

// =======================================================================================================
// Loops -
// for loop :-

//    for (initialization ; condition ; incremination) {
//  	Block of code;
//    }

// ----------------------------------------------------------------------------
// while loop :-

// initialization ;
//      while (condition) {
// 	Block of code;
// 	incremination;
//       }
// ----------------------------------------------------------------------------
// do while loop :-

// initialization;
//       do {
// 	Block of code;
// 	incremination;
//             } while(condition)

// ----------------------------------------------------------------------------
// for of loop :- for of loop is used for the arrays.

// var arr = [1,2,3,4,5]
// for (const n of arr) {
// 	console.log(n)
//         }

// ----------------------------------------------------------------------------
// for in loop :- for in loop is used for the objects.

// var obj  = {
// 	name: "A"
// 	age: 23
// 	city:"BNG"
//                   }	
// for (const n in obj) {
// 	console.log(obj[n])
//               }

// -----------------------------------------------------------------------------------
// Q1) Define Event Bubbling?
// Q2) What is new operator in javascript?
// Q3) Define unescape() and escape() functions?

// -------------------------------------------------------------------------------------
// Q) What is React ??
// 	React is one of javascript library
// 	It uses the component based  approach
// 	It is UI Development technology used to create the modern UI
// 	React is used to develop complex and intractive UI
// 	It helps to create UI components which can be reusable in UI
// -------------------------------------------------------------------------------------
// Q) Features of React?
// 	It has Virtual DOM
// 	It uses server side rendering
// 	It has Unidirectional data flow 
// --------------------------------------------------------------------------------------
// Q) Advantages of React?
// 	Increses the performance of the application
// 	convenient to use client side and server side
// 	Because of JSX code redeability increses
// 	writing UI text cases becomes easy
// ---------------------------------------------------------------------------------------
// Q) What are the limitations of React?
// 	React is the libraryits not a full framework
// 	As it is a library it is huge it  takes  more time to understand
// 	As it has JSX inline templeting coding get complex
// ----------------------------------------------------------------------------------------
// Q) What is JSX?
// 	JSX is the combination of javascript and XML
// 	JSX file rebust and boost the performance of application
// 	JSX file cant read by browser directly so by using transformer like babel it passes it to browser
// ----------------------------------------------------------------------------------------
// Constructor and new operator :- 
// function user (name,age) {
//     this.name=name,
//         this.age=age,
//         this.details=function(){
//         console.log(`my name is ${this.name} and age is ${this.age}`)
//         }
// }

// const user1 = new user("asif",18);
// user1.details()
// o/p ->my name is asif and age is 18
// ------------------------------------------------------------------------------------------
// bind method :-
// const obj = {
//     name : "Arbaj",
//     age : 18,
//     details : function () {
//         console.log(`${this.name} and ${this.age}`)
//     }
// }
// const obj1 = {
//     name:"asif",
//     age:24,
// }
// const data  = obj.details.bind(obj1) // reference
// console.log(data())
// o/p-> asif and 24
// -------------------------------------------------------------------------------------------
// call method :-
// const data = {
//     name : "a",
//     age:18,
//     details :function (){
//         console.log(`${this.name} and ${this.age}`)
//     }
// }

// const data1 = {
//     name:"b",
//     age:90
// }
// const data2 = {
//     name:"c",
//     age:24
// }

// data.details.call(data1)
// data.details.call(data2)
// o/p-> b and 90
// o/p-> c and 24
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// const name = {
//     details :function (name,age){
//         console.log(`${this.name} and ${this.age}and ${name}&${age}`)
//     }
// }
// const name1 = {
//     name:"b",
//     age:90
// }
// const name2 = {
//     name:"c",
//     age:24
// }
// name.details.call(name1)
// name.details.call(name2)
// name.details.call(name1,"d","56")
// o/p-->
// b and 90and undefined&undefined
// c and 24and undefined&undefined
//  b and 90and d&56
// -------------------------------------------------------------------------------------------------
// apply method:-
// const name = {
//     details :function (name,age){
//         console.log(`${this.name} and ${this.age}and ${name}&${age}`)
//     }
// }
// const name1 = {
//     name:"b",
//     age:90
// }
// const name2 = {
//     name:"c",
//     age:24
// }
// name.details.apply(name1)
// name.details.apply(name2)
// name.details.apply(name1,["d","56"])

// o/p->b and 90and undefined&undefined
//  c and 24and undefined&undefined
//  b and 90and d&56
// --------------------------------------------------------------------------------------------------
// prototype :-
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.name = function() {
//   return this.firstName + " " + this.lastName
// };

// const myFather = new Person("John", "Doe", 50, "blue");
//  myFather.name();
// o/p->'John Doe'
// -----------------------------------------------------------------------------------------------
// Shallow copy and Deep copy :-
// const data = {
//     name : "a",
//     age : 22,
//     city : "BLG",
//     active:true,
// }
// const data1 =  data ; // By changing data1, data also modified (Shallow copy)
// const data1 =  {...data} ; // no change in data (deep copy)
// const data1 = JSON.parse(JSON.stringify(data)) // no change in data (deep copy)

// data1.name = "b"
// data1.age = 24

// console.log(data)
// console.log(data1)
// o/p ->	{ name: 'a', age: 22, city: 'BLG', active: true }
// 	{ name: 'b', age: 24, city: 'BLG', active: true }

// ----------------------------------------------------------------------------------------------------
// const data = [
//     {name:"a",status:"active"},
//     {name:"b",status:"active"},
//     {name:"c",status:false},
//     {name:undefined,status:null},
//     ]
//     const result = data.filter((item)=>
//     item.status !== false && item.name !== undefined )
//     // console.log(data)
//     console.log(result)

// ==> [ { name: 'a', status: 'active' },
//            { name: 'b', status: 'active' } ]

// ------------------------------------------------------------------------------------------------------
// Currying Example - 
// console.log(sum(5)(10)(7)(3)) 

// function sum (a){
// 	return function (b){
// 		return function (c){ 
// 			return function (d){
// 				console.log(a+b+c+d)
// 					}
// 				}
// 		}
// }
// o/p=>25

// We can write above function by using arrow function :
// const sum = (a) => (b) => (c) => (d) => a+b+c+d
// console.log(sum(5)(10)(7)(3))
// o/p=> 25 

// ---------------------------------------------------------------------------------------------------------
// Write a program to swap two numbers :
// x = 1;
// y = 2;
// [y,x] = [x,y]
// console.log(y)
// console.log(x)
// o/p-> 1 
//            2

// ---------------------------------------------------------------------------------------------------------
// JavaScript Array Methods :
// const arr = [1,2,3,4,5,6,7]
// //map method
// const arrmap = arr.map((item)=>item+2)
// console.log("array map method output - ",arrmap)

// //reduce method 
// const arrreduce = arr.reduce((cur,acc)=>cur+acc)
// console.log("array reduce method output - ",arrreduce)

// //sort method
// const arrsortasc = arr.sort((a,b)=>a>b?1:-1)
// console.log("array sort method ascending",arrsortasc)
// const arrsortdes = arr.sort((a,b)=>a>b?-1:1)
// console.log("array sort method descending",arrsortdes)

// //flat method
// // const array = [1,2,3,[4,5],6,7]
// // const arrayflat = array.flat(1)
// // console.log("array flat method - ",arrayflat)
// // const arraytwo = [1,2,3,[[[4,5]]],6,7]
// // const arrayflatinfinity = arraytwo.flat(Infinity)
// // console.log("array flat infinity method - ",arrayflatinfinity)

// //Plaindrome
// const string  = "arab"
// const stringPalim = string.split('').reverse('').join('')===string
// console.log("palindrome - ",stringPalim)

// //Filter method
// //Filtering out Even and Odd numbers
// const arrEven = arr.filter((item)=>item%2==0)
// console.log("array filter method EVEN - ",arrEven)
// const arrOdd = arr.filter((item)=>item%2!==0)
// console.log("array filter method ODD - ",arrOdd)

// //filtering out duplicate and unique elements from an array
// const arr1 = [1,2,2,3,4,5,5,6,7]
// const arrDupli = arr1.filter((a,b)=>arr1.indexOf(a)!==b)
// const arrUnique = arr1.filter((item)=>!arrDupli.includes(item))
// console.log("filtering duplicate element from an array - ",arrDupli)
// console.log("filtering unique element from an array - ",arrUnique)

// //Adding first two elements of an array
// const a = [1,2,3,4,5,6,7,8]
// const addarray = (a)=>{
//     const arrOut = [];
//     for(let i=0; i<a.length ; i+=2){
//         arrOut.push(a[i]+(a[i+1]|0))
//     }
//     return arrOut;
// }
// console.log("addition of first two elements of array - ",addarray(a))

// //moving all zeros at the end of arrray
// const a1 = [1,0,3,4,0,3,0,4,5]
// const arrMoveZeroEnd = (a1) => {
//     for(let i=a1.length-1;i>=0;i--){
//        if(a1[i]===0){
//            a1.splice(i,1);
//           a1.push(0);
//        }
//     }
//        return a1;
// }
// console.log("moving all zeros at the end - ",arrMoveZeroEnd(a1))

// //finding count of duplicate and unique elements
// const a2 = [1,1,2,3,2,2,3,4,4,4,5]
// const arrUniqueCount = a2.reduce((a,b)=>{
//     if(a[b]===undefined){
//         a[b]=1;
//         return a;
//     }else{
//         a[b]++;
//         return a;
//     }
// },{})
// console.log("finding count of duplicate and unique elements - ",arrUniqueCount)

// //highest number in array
// const a3 = [7,8,9,0]
// const arrHighest = a3.reduce((a,b)=>a>b?a:b)
// console.log("highest number in array - ",arrHighest)
// const arrLowest = a3.reduce((a,b)=>a<b?a:b)
// console.log("lowest number in array - ",arrLowest)
// const arrAverage = a3.reduce((a,b)=>a+b/a3.length)
// console.log("average number in array - ",Math.ceil(arrAverage))

// //converting first element of an element to uppercase
// const obj = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
// for(let n of obj){
//     const arrUppercase = n.charAt(0).toUpperCase() + n.substring(1)
//     console.log("uppercase - ",arrUppercase)
// }

