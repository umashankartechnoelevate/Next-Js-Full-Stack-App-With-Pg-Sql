const express = require("express");

const app = express();

const os = require("os");
console.log("CPU cores", os.cpus().length);

app.get("/", (req, res) => {
  res.send("hello I created a server");
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
