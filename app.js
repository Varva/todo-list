//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemsSchema ={
  name : String
};

const note = mongoose.model("note", itemsSchema);

const note1 = new note({
  name : "clean the house"
});
const note2 = new note({
  name : "clean the house"
});
const note3 = new note({
  name : "clean the house"
});

note.insertMany([{ name: 'note1'},{ name: 'note2'},{ name: 'note3'}], function(err) {
console.log(err);
});

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items,
    note : note
   });

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const item = new item({
    name : itemName
  });

  app.post("/delete", function(req, res){
    const checkedItemId = req.body.checkbox;
    });

  item.save();

  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
