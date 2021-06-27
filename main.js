const { BrowserWindow, app } = require("electron");
require("./express.js");

let mainWindow = null;

function main() {
  mainWindow = new BrowserWindow({ frame: true, width: 320, height: 475 });
  mainWindow.loadURL(`http://localhost:7049/`);
  mainWindow.on("close", (event) => {
    mainWindow = null;
  });
}

app.on("ready", main);
