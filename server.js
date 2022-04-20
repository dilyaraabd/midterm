const express = require("express");
const app = express();
const port = 3000;

const ejs=require("ejs");

app.set('view engine','ejs');
app.get('/',(req, res) => {
    res.render(__dirname+"/views/cook1.ejs")
} )
app.get('/shop',(req, res) => {
    res.render(__dirname+"/views/shop.ejs")
} )
app.get('/feedback',(req, res) => {
    res.render(__dirname+"/views/feedback.ejs")
} )
app.get('/recipes',(req, res) => {
    res.render(__dirname+"/views/recipes.ejs")
} )
app.get('/cook1',(req, res) => {
    res.render(__dirname+"/views/cook1.ejs")
} )
app.use(express.static("public"))

app.use("/", require("./routes/cook1"));
app.use("/feedback", require("./routes/feedback"));
app.use("/recipes", require("./routes/recipes"));
app.use("/shop", require("./routes/shop"));
app.use("/cook1", require("./routes/cook1"));



app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

