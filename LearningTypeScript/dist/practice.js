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
console.log((0, exports.colorCode)('grey'));
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
console.log(exports.COLORS);
//# sourceMappingURL=practice.js.map