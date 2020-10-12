const fs = require('fs');

const algoNumber = "08";
const algoTitle = "largest_product_in_a_series";
const algoFunctionName = "largestProduct";

fs.mkdir(`./algorithms/${algoNumber}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Directory '${algoNumber}' created in './algorithms'`)
    }
});

fs.writeFile(`./algorithms/${algoNumber}/${algoTitle}.md`, `##${algoTitle}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`${algoTitle}.md created at './algorithms/${algoNumber}'`)
    }
})

fs.writeFile(`./algorithms/${algoNumber}/worksheet.js`, `function ${algoFunctionName}() {}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`worksheet.js created at './algorithms/${algoNumber}'`)
    }
})

fs.writeFile(`./algorithms/${algoNumber}/${algoFunctionName}.js`, `function ${algoFunctionName}() {} \n 
module.exports = ${algoFunctionName}    `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.js created at './algorithms/${algoNumber}'`);
});

fs.writeFile(`./algorithms/${algoNumber}/${algoFunctionName}.test.js`, `const ${algoFunctionName} = require('./${algoFunctionName}') \n
test('test caption', () => { 
    expect(${algoFunctionName}(num)).toBe(num); 
});     `, 

function (err) {
    if (err) throw err;
    console.log(`${algoFunctionName}.test.js created at './algorithms/${algoNumber}'`);
});