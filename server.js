const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://renu:renu@cluster0-shard-00-00-to5cn.mongodb.net:27017,cluster0-shard-00-01-to5cn.mongodb.net:27017,cluster0-shard-00-02-to5cn.mongodb.net:27017/freshwork?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});
mongoose.connection.once('open', function() {
    console.log('Database connected');
});

const addSchema = {
  keyy :  String,
  valuee: String
}

const Addpanel = mongoose.model("addpanel", addSchema);

app.post("/add", (req, res) => {

    const addpanel = {
        keyy: req.body.keyy,
        valuee: req.body.valuee
    }

    Addpanel.create(addpanel, (err) => {
        if(err){
            res.send({
                message:"Not Inserted",status :"500"
              });
        } else {
             res.send({
                message:"Inserted",status:"200"
            });
        }
    });

});

app.post("/view", (req, res) => {

    let keyy = req.body.keyy;

    Addpanel.find({keyy: keyy}, ['keyy', 'valuee'], (err, addpanels) => {
        if(err) {
            res.send({
                message:"No Records found",status :"500"
              });
        } else {
             res.send({status: 200, message: "Fetched Successfully!", addpanels});
    }

    });

});

app.post("/remove", (req, res) => {

    let keyy = req.body.keyy;

    Addpanel.deleteOne({keyy : keyy}, (err) => {
        if(err) {
            res.send({
                message:"Not Deleted",status :"500"
              });
        }else {
            res.send({status: 200, message: "Deleted Successfully!"});
        }

    });

});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is listening to the port : " + port);
});
