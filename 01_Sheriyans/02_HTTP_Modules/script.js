const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // res.setHeader("Content-Type", "application/json"); //? Uncomment for JSON response
  // res.setHeader("Content-Type", "text/html"); //? Uncomment for HTML response
  // res.setHeader("Content-Type", "application/xml"); //? Uncomment for XML response
  // res.setHeader("Content-Type", "text/css"); //? Uncomment for CSS response
  // res.setHeader("Content-Type", "text/javascript"); //? Uncomment for JS response
  // res.setHeader("Content-Type", "image/png"); //? Uncomment for image response
  // res.setHeader("Content-Type", "application/pdf"); //? Uncomment for PDF response
  // res.setHeader("Content-Type", "application/octet-stream"); //? Uncomment for binary response
  // res.setHeader("Content-Type", "application/x-www-form-urlencoded"); //? Uncomment for form data response
  // res.setHeader("Content-Type", "multipart/form-data"); //? Uncomment for multipart form data response

  res.end("Hello Server!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
