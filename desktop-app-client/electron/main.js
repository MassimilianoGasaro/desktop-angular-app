const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  })

  win.loadFile(path.join(__dirname, '../dist/desktop-app-client/browser/index.html'));
}

app.whenReady().then(createWindow);

ipcMain.handle('get-version', () => {
  return app.getVersion();
})
