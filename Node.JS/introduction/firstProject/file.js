const fs = require("fs");

fs.writeFile("test.js", "Olé NodeJs", (err) => {
  console.log(err);
});
