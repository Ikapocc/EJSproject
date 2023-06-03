const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let items = ""
let arr = []

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let date = new Date()
    let opts = {
        weekday : 'long',
        day: 'numeric',
        month: 'long'
    }
    let today = date.toLocaleDateString("es-ES", opts)

    res.render("list", {day: today, mytask : arr})
})

app.post("/", (req, res) => {
    items = req.body.taskname
    arr.push(items)
    console.log(items)
})

app.listen(3000, function () {
    console.log("Ready to go!")
})