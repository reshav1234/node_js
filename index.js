// We will read and write files using node
// "fs" is file system module in node js
// import fs using require() method

const console = require("console")
const fs = require("fs")

/* We will 
    Read file
    Create file
    Update file
    Delete file
*/
// Use fs.readFile() to read file

fs.readFile("./text/first.txt", (err, data) =>
{
    console.log(data.toString()) // We use toString to display result in string
})
fs.readFile("./text/second.txt", (err, data) =>
{
    if(err)
    {
        throw err;
    }
    console.log(data.toString())

})

