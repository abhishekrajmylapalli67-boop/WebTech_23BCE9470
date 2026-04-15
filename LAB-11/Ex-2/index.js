const fs = require("fs");

fs.writeFile("sample.txt", "Hello Node", err => {
if (!err) {
fs.readFile("sample.txt", "utf8", (err, data) => {
if (!err) {
console.log(data);
fs.appendFile("sample.txt", "\nAppended Text", err => {
if (!err) {
fs.unlink("sample.txt", err => {
if (!err) console.log("File deleted");
});
}
});
}
});
}
});