const fs = require("fs");

fs.readFile("./message.txt", "utf8", (err, data) => { //fs.readFile = reads a file (async) 
    if (err) throw err;
    console.log("File content:", data);
});

const content = "Arjun is Awesome!!!";

fs.writeFile("./output.txt", content, "utf8", (err) => { //fs.writeFile = writes to file (overwrites)
    if (err) throw err;
});

const moreContent = "\nArjun is Coolest";

fs.appendFile("./output.txt", moreContent, "utf8", (err) => { //fs.appendFile = adds to the end of the file
    if (err) throw err;
});
