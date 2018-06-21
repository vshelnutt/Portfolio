var express = require("express"),
app = express(),
 bodyParser = require("body-parser");

app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.engine('html', require('ejs').renderFile);

//Main App Route
app.get("/", function(req, res){
    res.render("index.html");
});














//Run Server
const port = 1337;
app.listen(process.env.PORT || port, () => console.log(`Listening  on port ${port}`));
