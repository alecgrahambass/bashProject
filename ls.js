const fs = require('fs')
fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err
  } else {
    processing.stdout.write(files.join('\n'))
    processing.stdout.write("prompt >");
  }
})