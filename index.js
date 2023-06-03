const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let date = new Date()
    let today = ""
    let weekdays = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    if (date.getDay() === 6 || date.getDay() === 0) {
        today = weekdays[date.getDay() - 1]
    }else{
        today = weekdays[date.getDay() - 1]
    }

    res.render("list", {day: today})
})

app.listen(3000, function () {
    console.log("Ready to go!")
})