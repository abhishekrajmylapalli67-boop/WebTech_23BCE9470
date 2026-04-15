const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", data => {
console.log("Received:", data);
});

emitter.on("message", data => {
console.log("Processed:", data.toUpperCase());
});

emitter.emit("message", "node event triggered");