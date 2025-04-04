//? To use the callback and sync APIs
const fs = require("fs");

//?  write file synchronously
fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) console.log(err);
  else console.log("File created successfully!");
});

// //? Append file - where we add data to the end of the file
fs.appendFile("hello.txt", " How are you?", (err) => {
  if (err) console.log(err);
  else console.log("File appended successfully!");
});

// //? Rename file - where we change the name of the file
fs.rename("hello.txt", "greet.txt", (err) => {
  if (err) console.log(err);
  else console.log("File renamed successfully!");
});

// //? Copy file - where we copy the file to a new location
fs.copyFile("greet.txt", "greet_copy.txt", (err) => {
  if (err) console.log(err);
  else console.log("File copied successfully!");
});

//? Unlink file - where we delete the file
fs.unlink("greet.txt", (err) => {
  if (err) console.log(err);
  else console.log("File removed succesfully");
});

//? Make directory - where we make folder
fs.mkdir("folder", (err) => {
  if (err) console.log(err);
  else console.log("Folder made succesfully");
});

// //? Remove directory - where we remove folder
fs.rmdir("folder", (err) => {
  if (err) console.log(err);
  else console.log("Folder removed succesfully");
});

//? Open file
fs.open("greet_copy.txt", (err, fd) => {
  if (err) console.log(err);
  else console.log("File opened successfully!");
  console.log(fd); //* file descriptor is a number that represents the opened file
});

//? Read file - where we read the file and get the data from it
fs.readFile("greet_copy.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

//? Watch file - where we watch the file for changes and get notified when it changes
fs.watch("greet_copy.txt", (eventType, filename) => {
  if (eventType === "change") {
    console.log(`${filename} file has changed!`);
  } else if (eventType === "rename") {
    console.log(`${filename} file has been renamed!`);
  }
});
