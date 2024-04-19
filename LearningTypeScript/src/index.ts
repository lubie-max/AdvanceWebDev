
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
let User: [string, number] = ['Lubna', 22] //if we  pass more than 2 arguments then it will throw exception.


// 3. Enum  : it's basically a function that provides a count 

enum Prices {First =11, Second}; //  value assigned to the First is starting point of counter/ index
let firstPrice: Prices = Prices.Second; //

// console.log(firstPrice)

// 4. Functions
// age?:number : ? means age is optional here. while compilation if we don't pass age, it will not goin to throw an exception
function UserData(name: string , age?:number): any{
    // we have to enable few functionalities here from tsconfig.json like "noImplicitReturns": true,  for not implecit returs

    let x = name.split('#')
    return x

}

// console.log(UserData('Lubna,shai#kh'))



//5. Objects 

let Employee:{
     readonly id: number,  // readonly tsc feature which does not let the property be modified.
     name: string,
     retirementDATE: (date:Date)=> void,  // expects a date function 
} = {
    id : 1,
    name : 'Lubna',
    retirementDATE: (date:Date)=> {
        console.log(date)
    }


}
Employee.name= "shaikh"
console.log(Employee.name, Employee.retirementDATE)


