//? To use the callback and sync APIs
const fs = require("fs");

//?  write file synchronously
fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) console.log(err);
  else console.log("File created successfully!");
});
