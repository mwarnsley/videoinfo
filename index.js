/**
 * File used to create the electron application
 */

// Import the required modules using the Node.js syntax
const electron = require('electron');
// Lifecycle of the running electron application
const { app, BrowserWindow } = electron;

// Running the ready event on the app
app.on('ready', () => {
  // Starting a new browser window for the application
  const mainWindow = new BrowserWindow({});
  // Telling the window to go out and load up an html document
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
