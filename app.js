const express = require("express")
const app = express()


function introduce(name) {
  console.log(`my name is ${name} and am a student of afit`)
}

module.exports = {introduce}
