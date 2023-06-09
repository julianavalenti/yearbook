
require("dotenv").config();

const { PORT = 4000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

    const StudentSchema = new mongoose.Schema({
        name: String,
        location: String,
        quote: String,
        url: String,
        photo: String,
    });

    const Student = mongoose.model("Student", StudentSchema);


app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(express.urlencoded({extended:  true}));
app.get("/", (req, res) => {
    res.send("hello world");
});
// STUDENT INDEX ROUTE
app.get("/student", async (req, res) => {
    try {
        // send all people
        res.json(await Student.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// STUDENT CREATE ROUTE
app.post("/student", async (req, res) => {
    try {
        // send all people
        res.json(await Student.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//STUDENT DELETE ROUTE 
app.delete("/student/:id", async (req, res) => {
    try {
      // send all people
      res.json(await Student.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


  // STUDENT UPDATE ROUTE
app.put("/student/:id", async (req, res) => {
    try {
      // send all people
      res.json(
        await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));