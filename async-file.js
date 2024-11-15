const fs = require('fs')
// reading text asynchronously

fs.readFile('./texts/read.txt','utf-8' ,(err,data)=>{
    if(err){
        throw Error('Error reading text')
    }
    
    // writting text asynchoronously
    fs.writeFile('./texts/read.txt',data, 'utf-8',(err)=>{
        if(err){
            throw Error('Error Writing data')
        }
    })
    
})

console.log('testing asynchronous');