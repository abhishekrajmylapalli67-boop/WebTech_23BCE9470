const express = require("express");
const app = express();

app.use((req, res, next) => {
console.log(req.method, req.url, new Date().toLocaleTimeString());
next();
});

app.use((req, res, next) => {
console.log("Second layer");
next();
});

app.get("/", (req, res) => {
res.send("Middleware executed");
});

app.get("/test", (req, res, next) => {
console.log("Route middleware");
next();
}, (req, res) => {
res.send("Route specific middleware");
});

app.listen(3000, () => console.log("Server started"));