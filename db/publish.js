const moment = require("moment");
const package = require("./package.json");
const { exec } = require("child_process");
const path = require("path");

const fs = require("fs");

package.version = moment().format("YYYYMMDD.HH.MMss");

fs.writeFileSync(path.join(__dirname, "./package.json"), JSON.stringify(package, null, 2));
exec("npm publish", { cwd: __dirname }, (err, stdout, stderr) => {
  if (err) {
    console.error("###Publish Fail", err);
    console.error("###Publish Fail", stderr);
    return;
  }
  console.info(`Publish Success: ${stdout}`);
});
