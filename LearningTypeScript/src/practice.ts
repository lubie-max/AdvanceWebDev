

type Employee = {
    id :number,
    username :string,
    password : string,
    joiningDate : (date:Date) =>void,
    birthDate?: (date:Date) =>void,

}



let emp1: Employee = {
    id :1,
    username : "Lubna Shaikh",
    password : "1234ls",
    joiningDate: (date) => date = new Date()
    
}









// -------------------------------------------------------------------


enum ResistorColor {
    Black = 0,
    Brown= 1,
    Red= 2,
    Orange = 3,
    Yellow=4,
    Green= 5,
    Blue=6,
    Violet= 7,
    Grey= 8,
    White= 9
      }


export const colorCode = (color:string): number => {

switch(color){

   case 'black':
        return ResistorColor.Black;
    case 'brown':
        return ResistorColor.Brown;
    case 'red':
        return ResistorColor.Red;
    case 'orange':
        return ResistorColor.Orange;
    case 'yellow':
        return ResistorColor.Yellow;
    case 'green':
        return ResistorColor.Green;
    case 'blue':
        return ResistorColor.Blue;
    case 'violet':
        return ResistorColor.Violet;
    case 'grey':
        return ResistorColor.Grey;
    case 'white':
        return ResistorColor.White;
    default:
        throw new Error('Invalid color');
}




}


// console.log(colorCode('grey'))
// console.log(colorCode('white'))




export const COLORS: string[] = [
'black',
'brown',
'red',
'orange',
'yellow',
'green',
'blue',
'violet',
'grey',
'white',
];


// console.log(COLORS)


for(let i:number = 14 ; i > 5 ;i--){
    console.log(i)

    if(i == 10)
        break
}



// OOP 
/*
 classes are used to create objects with specific behavior and data,
  while interfaces are used to define the structure of objects 
  and enforce contracts between different parts of the codebase.
*/
// interface

interface print {
    printValue() : void 
}

class ConstAndRule implements print{

    username: string;
    
    constructor(username: string){
        this.username = username
    }

   printValue() {
       console.log(this.username)
   }

}

let ls = new ConstAndRule('Lubna Shaikh')

function printName(name: print){
    name.printValue()
}

printName(ls)