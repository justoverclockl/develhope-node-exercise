import fs from "fs";

const data = 'This it the demo text'
const path = 'demo.txt'

fs.writeFile(path, data, { flag: 'wx' }, function (err) {
    if (path) return;
    if (err) throw err;
    console.log("File saved to file system!");
});