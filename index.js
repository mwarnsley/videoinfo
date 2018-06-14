/**
 * File used to create the electron application
 */

// Import the required modules using the Node.js syntax
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

// Lifecycle of the running electron application
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

// Running the ready event on the app
app.on('ready', () => {
  // Starting a new browser window for the application
  mainWindow = new BrowserWindow({});

  // Telling the window to go out and load up an html document
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// Listening for the message from the main window of the application
ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    const duration = metadata.format.duration;

    // Sending the data back to the main window
    mainWindow.webContents.send('video:metadata', duration);
  });
});
