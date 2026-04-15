const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

const schema = new mongoose.Schema({
name: String
});

const Model = mongoose.model("User", schema);

app.post("/add", async (req, res) => {
const data = await Model.create({ name: req.body.name });
res.json(data);
});

app.get("/all", async (req, res) => {
const data = await Model.find();
res.json(data);
});

app.put("/update/:id", async (req, res) => {
const data = await Model.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
res.json(data);
});

app.delete("/delete/:id", async (req, res) => {
const data = await Model.findByIdAndDelete(req.params.id);
res.json(data);
});

app.listen(3000, () => console.log("DB server running"));