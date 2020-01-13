"use strict";
const fs = require("fs");
function readJSONThrows(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(null, JSON.parse(data));
  });
}
try {
  readJSONThrows("data.txt");
} catch (err) {
  process.on("uncaughtException", err => {
    console.error("This will catch " + err.message);
    process.exit(1);
  });
}
