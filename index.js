const express = require("express");
const path = require("path")



//Require Routes
const indexRoute = require("./routes/index")
const ASCIIRoute = require("./routes/ASCII");
const BinaryRoute = require("./routes/Binary")


//Initializations
const app = express();
app.use(express.urlencoded({extended: false}))

//Settings 
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");



//Routes

app.use(indexRoute);
app.use(ASCIIRoute);
app.use(BinaryRoute);

//Static Files 
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "css")))

//Middlewares
app.use(express.json(), (req, res, next) => { 
    next();
})


//Server

app.listen(app.get("port"), () =>  {
    console.log(`The app is listening on port ${app.get("port")}`)
})

