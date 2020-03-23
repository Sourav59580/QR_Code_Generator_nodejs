const express = require('express');
const bodyParser = require('body-parser');
var QRCode = require('qrcode');

const app = express();

//set view engine
app.set("view engine","ejs");

//Middle ware
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/qr",(req,res)=>{
    res.render("qr");
})

app.post('/generator',(req,res)=>{
    var name = req.body.name;
    var phone = req.body.phone;
    var string = (name+phone);
    console.log(string);

    QRCode.toString(string,{type:'terminal'}, function (err, url) {
      if(err) throw err;
     console.log(url);
    })

    res.render("index");
})




//connection create
const PORT = process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log("Server is running at port 3000");
})