

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


// for(let i:number = 14 ; i > 5 ;i--){
//     console.log(i)

//     if(i == 10)
//         break
// }



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

// printName(ls)

// classes

class Robot{
    // protected botName: string;  //  if property is private, it's only accessible within the class. // if property is protected it's only accessible within the class and its superclasses , not outof classess.

    constructor( protected botName: string){

        // this.botName = botName  // we can also use get() and set() for setting this property.
        
    }

    greet(){
        return console.log(`HI ${this.botName.toUpperCase()} `)
    }

    actions(action: string) {
       return console.log(`${this.botName} is ${action}`)
    }
    
}

class IndustryRobot extends Robot{

    constructor(botName: string){
        super(botName)
    }

    work(...actionsList: string[]){
        console.log(`HELLO ,${this.botName} `)
        super.actions(actionsList[0])  // parent method call

        actionsList.map(action => console.log(action))

    }

    modelNumber(num : number){
        console.log(`${this.botName}'s Model Number is ${num}`) 
    }
   
}


let robot = new Robot('jack')
// robot.greet()
// robot.actions('dispatch')

let iRobot = new IndustryRobot('Laura')

iRobot.work('kicking','selling','chating','billing')

iRobot.modelNumber(3)