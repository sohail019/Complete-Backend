//? To use the callback and sync APIs
const fs = require("fs");

//?  write file synchronously
fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) console.log(err);
  else console.log("File created successfully!");
});

//? Append file - where we add data to the end of the file
fs.appendFile("hello.txt", " How are you?", (err) => {
  if (err) console.log(err);
  else console.log("File appended successfully!");
});

//? Rename file - where we change the name of the file
fs.rename("hello.txt", "greet.txt", (err) => {
  if (err) console.log(err);
  else console.log("File renamed successfully!");
});
