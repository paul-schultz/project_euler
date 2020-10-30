const fs = require('fs');

const algoNumber = "11";
const mdTitle = "largest_product_in_a_grid";
const mdHeader = `## Problem ${algoNumber}: Largest Product in a Grid`
const algoFunctionName = "largestProduct";

fs.mkdir(`./problems/${algoNumber}`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`Directory '${algoNumber}' created in './problems'`)
    }
});

fs.writeFile(`./problems/${algoNumber}/${mdTitle}.md`, `${mdHeader}\nFrom projecteuler.net:\n>`, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log(`${mdTitle}.md created at './problems/${algoNumber}'`)
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