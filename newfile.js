const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
mongoose.set('strictQuery', false);
const app = express();

app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/newFile").then(()=>{   
    console.log("connected to database");
});

const songSchema = mongoose.Schema({
    title: {type: String, default: ""},
    singer: {
        name: {type: String, default: ""},
        songs: [{
            songName: {type: String, default: ""},
            yearOfRelease: {type: Number, default: ""}
        }]
    }
})

const Song = new mongoose.model("song", songSchema);

app.post("/", async(req, res)=>{
    // try {
    //    let result = await Song.create(req.body);
    //    res.send({
    //     result: result
    //    })
    // } catch (error) {
    //     res.json({
    //         message: error.message
    //     })
    // }
        let result = await Song.create(req.body);
       res.send({
        result: result
       })
})
app.post("/addNewSong", async (req, res)=>{
    try {
        console.log(req.body ,"req");
        let result = await Song.findById(req.body.id)
        console.log(result, "result");
        result.singer.songs.push(req.body.updateQuery);
        result.save();
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})


let port = 5000;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})


