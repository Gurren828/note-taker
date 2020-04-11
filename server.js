const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//future code here
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
