"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.colorCode = void 0;
let emp1 = {
    id: 1,
    username: "Lubna Shaikh",
    password: "1234ls",
    joiningDate: (date) => date = new Date()
};
// -------------------------------------------------------------------
var ResistorColor;
(function (ResistorColor) {
    ResistorColor[ResistorColor["Black"] = 0] = "Black";
    ResistorColor[ResistorColor["Brown"] = 1] = "Brown";
    ResistorColor[ResistorColor["Red"] = 2] = "Red";
    ResistorColor[ResistorColor["Orange"] = 3] = "Orange";
    ResistorColor[ResistorColor["Yellow"] = 4] = "Yellow";
    ResistorColor[ResistorColor["Green"] = 5] = "Green";
    ResistorColor[ResistorColor["Blue"] = 6] = "Blue";
    ResistorColor[ResistorColor["Violet"] = 7] = "Violet";
    ResistorColor[ResistorColor["Grey"] = 8] = "Grey";
    ResistorColor[ResistorColor["White"] = 9] = "White";
})(ResistorColor || (ResistorColor = {}));
const colorCode = (color) => {
    switch (color) {
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
};
exports.colorCode = colorCode;
// console.log(colorCode('grey'))
// console.log(colorCode('white'))
exports.COLORS = [
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
class ConstAndRule {
    constructor(username) {
        this.username = username;
    }
    printValue() {
        console.log(this.username);
    }
}
let ls = new ConstAndRule('Lubna Shaikh');
function printName(name) {
    name.printValue();
}
// printName(ls)
// classes
class Robot {
    constructor(botName) {
        this.botName = botName;
    }
    greet() {
        return console.log(`HI ${this.botName.toUpperCase()} `);
    }
    actions(action) {
        return console.log(`${this.botName} is ${action}`);
    }
}
class IndustryRobot extends Robot {
    constructor(botName) {
        super(botName);
    }
    work(...actionsList) {
        console.log(`HELLO ,${this.botName} `);
        super.actions(actionsList[0]); // parent method call
        actionsList.map(action => console.log(action));
    }
}
let robot = new Robot('jack');
// robot.greet()
// robot.actions('dispatch')
let iRobot = new IndustryRobot('Laura');
iRobot.work('kicking', 'selling', 'chating', 'billing');
//# sourceMappingURL=practice.js.map