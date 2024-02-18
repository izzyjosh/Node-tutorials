const {readFile,writeFile} = require("fs")


readFile("./text.txt","utf8",(err,success) => {
  if (err) {
    console.log(err)
  }
  console.log(success)
})

console.log("checking for file...")


//promise can also be written using the util module in nodejs threough the steps below
//
//const util = require("util")
//
//const getText = util.promisify(readFile)
//const writeNewText = util.promisify(writeFile)


const getText = (path) => {
  return new Promise((resolve,reject) => {
    readFile(path,"utf8",(err,data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

const newWriteFile = (path,note) => {
  return new Promise((resolve,reject) => {
    writeFile(path,note,(err,success) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(success)
      }
    })
  })
}

const start = async() => {
  try {
    const firstFile = await getText("./text.txt")
    const secondFile = await getText("./writing.txt")
    const note = `${firstFile} ${secondFile}`
    const path = "./check.txt"
    const write = await newWriteFile(path,note)
    const getWrite = await getText(path)
    console.log(getWrite)
  }
  catch(err) {
    console.log(err)
  }
}

start()
