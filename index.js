/**
 * File used to create the electron application
 */

// Import the required modules using the Node.js syntax
const electron = require('electron');
// Lifecycle of the running electron application
const { app } = electron;

// Running the ready event on the app
app.on('ready', () => {
  console.log('The App is now ready');
});
