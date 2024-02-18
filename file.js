const {readFile,writeFile} = require("fs")


readFile("./text.txt","utf8",(err,success) => {
  if (err) {
    console.log(err)
  }
  console.log(success)
})

console.log("checking for file...")

async function writeFile("./writing.txt","i am writing to this file",(err,success) => {
  if (err) {
    console.log(err)
  }
  else {
    readFile("./writing.txt","utf8",(err,success) => {
      if (err) {
        console.log(err)
      }
      console.log(success)
    })
  }
})
