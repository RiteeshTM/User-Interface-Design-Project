const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // path to your preload script
    }
  });

  // and load the index.html of the app.
  win.loadFile('Login.html');
}

app.whenReady().then(createWindow);