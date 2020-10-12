const fs = require('fs');

const algoNumber = "05";
const algoTitle = "smallest_multiple";
const algoFunctionName = "smallestMultiple";

fs.mkdir(`./${algoNumber}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Directory ${algoNumber} created`)
    }
});

fs.writeFile(`./${algoNumber}/${algoTitle}.md`, `##${algoTitle}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`${algoTitle}.md created at './${algoNumber}'`)
    }
})

fs.writeFile(`./${algoNumber}/worksheet.js`, `function ${algoFunctionName}() {}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`worksheet.js created at './${algoNumber}'`)
    }
})

fs.writeFile(`./${algoNumber}/${algoFunctionName}.js`, `function ${algoFunctionName}() {} \n 
module.exports = ${algoFunctionName}    `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.js created at './${algoNumber}'`);
});

fs.writeFile(`./${algoNumber}/${algoFunctionName}.test.js`, `const ${algoFunctionName} = require('./${algoFunctionName}') \n
test('test caption', () => { 
    expect(${algoFunctionName}(num)).toBe(num); 
});     `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.test.js created at './${algoNumber}'`);
});