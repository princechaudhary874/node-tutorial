const fs = require('fs');
//  readFile is non-blocking async while readFileSync is blocking sync

// READ FILE 
// Async Method
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })
const a=fs.readFileSync('file.txt')
console.log(a.toString())
console.log('Finished reading successfully')

// WRITE FILE
// Async method
// fs.writeFile('file2.txt','I have written successfully',()=>{
//     console.log("Written successfully")
// })
b=fs.writeFileSync('file2.txt','I have written successfully twice')
console.log('Finished writing')