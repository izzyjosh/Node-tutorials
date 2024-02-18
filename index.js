const express = require("express")
const introduce = require("./app")
const app = express();


app.get("/",(req,res) => {
  res.send("Hello world")
})

introduce.introduce("joshua Joseph")

app.listen(3000,() => {
  console.log("Express running on port 3000")
})
