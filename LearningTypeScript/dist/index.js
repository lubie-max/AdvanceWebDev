"use strict";
// let Myname: string = "lubna"
// console.log(name , age)
// if (age > 20){
//     age = age + 5
// }
// console.log(age)
// let age: number = 22 
// if (age> 20){
//     age += 5
// }
// console.log(age)
// ------------------------------  DATA Types --------------------------------
// 1. Any (for better practice avoid using)
// let arr = [1,3 ,'4'] // normal js array
// let arr2: number[] = [1,'3']; // TC syntax throws exception
// 2. Tuples
let User = ['Lubna', 22]; //if we  pass more than 2 arguments then it will throw exception.
// 3. Enum  : it's basically a function that provides a count 
var Prices;
(function (Prices) {
    Prices[Prices["First"] = 11] = "First";
    Prices[Prices["Second"] = 12] = "Second";
})(Prices || (Prices = {}));
; //  value assigned to the First is starting point of counter/ index
let firstPrice = Prices.Second; //
// console.log(firstPrice)
// 4. Functions
// age?:number : ? means age is optional here. while compilation if we don't pass age, it will not goin to throw an exception
function UserData(name, age) {
    // we have to enable few functionalities here from tsconfig.json like "noImplicitReturns": true,  for not implecit returs
    let x = name.split('#');
    return x;
}
// console.log(UserData('Lubna,shai#kh'))
//5. Objects 
let Employee = {
    id: 1,
    name: 'Lubna',
    retirementDATE: (date) => {
        const d = new Date(date.getFullYear());
        console.log(d);
        return d;
    }
};
Employee.name = "shaikh";
const Emp = {
    id: 123,
    username: 'Lubna',
    baseId: '123LS'
};
console.log(Emp.baseId, Emp.username);
//# sourceMappingURL=index.js.map