const fs = require('fs');

const algoNumber = "09";
const algoTitle = "special_pythagorean_triplet";
const algoFunctionName = "specialTriplet";

fs.mkdir(`./problems/${algoNumber}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Directory '${algoNumber}' created in './problems'`)
    }
});

fs.writeFile(`./problems/${algoNumber}/${algoTitle}.md`, `##${algoTitle}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`${algoTitle}.md created at './problems/${algoNumber}'`)
    }
})

fs.writeFile(`./problems/${algoNumber}/worksheet.js`, `function ${algoFunctionName}() {}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`worksheet.js created at './problems/${algoNumber}'`)
    }
})

fs.writeFile(`./problems/${algoNumber}/${algoFunctionName}.js`, `function ${algoFunctionName}() {} \n 
module.exports = ${algoFunctionName}    `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.js created at './problems/${algoNumber}'`);
});

fs.writeFile(`./problems/${algoNumber}/${algoFunctionName}.test.js`, `const ${algoFunctionName} = require('./${algoFunctionName}') \n
test('test caption', () => { 
    expect(${algoFunctionName}(num)).toBe(num); 
});     `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.test.js created at './problems/${algoNumber}'`);
});