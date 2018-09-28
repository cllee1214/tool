const { ipcMain } = require('electron')
const { exec }  = require('child_process')

ipcMain.on('sass-watch', function(e,arg){

  let workProcess = exec('gulp watch:sass', {cwd: 'F:\\work\\1905_ticket_tcenter_single\\ext\\Public\\theme'})
  workProcess.stdout.on('data', function(data){
    console.log(data)
  })
  workProcess.stderr.on('data', function(data){
    console.log(data)
  })
  
})