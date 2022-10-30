const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
const { MongoClient } = require('mongodb');
app.use(cors());


app.post("/post", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});

app.post('/signup',(req, res) => {
    let data = req.body;
    console.log(data)
    res.redirect("/");
  })
;

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
