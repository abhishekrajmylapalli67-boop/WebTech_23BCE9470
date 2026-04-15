const express = require("express");
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Amit" }];

app.get("/users", (req, res) => {
res.json(users);
});

app.post("/users", (req, res) => {
const user = { id: Date.now(), name: req.body.name };
users.push(user);
res.json(user);
});

app.put("/users/:id", (req, res) => {
users = users.map(u => u.id == req.params.id ? { ...u, name: req.body.name } : u);
res.json(users);
});

app.delete("/users/:id", (req, res) => {
users = users.filter(u => u.id != req.params.id);
res.json(users);
});

app.listen(3000, () => console.log("API running"));