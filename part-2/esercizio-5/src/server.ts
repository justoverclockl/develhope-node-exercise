import * as util from "util";

const clc = require("cli-color");

// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log(`SurprisingFact: ${surprisingFact}`)
console.log(clc.yellow(surprisingFact));

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
    {
        name: "Person 1",
        children: [
            {
                name: "Person 2",
                children: [
                    {
                        name: "Person 3",
                        children: [
                            {
                                name: "Person 4",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

console.log(clc.blue(util.inspect(familyTree, {depth:null})));
console.log('FamilyThree: ', util.inspect(familyTree, {depth:null}))


// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.
let i = 0
const importantTask = () => {
    if (i === 4) {
        i = 0
    }
    return console.log(++i)
}

importantTask();
importantTask();
importantTask();
importantTask();
importantTask();
importantTask();