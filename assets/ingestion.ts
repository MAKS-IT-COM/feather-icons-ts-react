import fs from 'fs'
import path from 'path'
import { parse } from 'node-html-parser'

const iconsDir = path.join(__dirname, 'feather')
const outFile = path.join(__dirname, '../src', 'icons.json')

interface IIcons {
  [key: string]: string
}

fs.readdir(iconsDir, (err, files) => {
  //handling error
  if (err) {
      return console.log('Unable to scan directory: ' + err)
  } 

  const icons : IIcons = {}

  //listing all files
  files.forEach((file) => {
      const name = path.basename(file, '.svg')

      icons[name] = ''
      parse(fs.readFileSync(path.join(iconsDir, file), 'utf8')).childNodes.forEach(node => {
        node.childNodes.forEach(childNode => {
          icons[name] += childNode.toString()
        })
      })
  })

  fs.writeFile(path.join(outFile), JSON.stringify(icons), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
  
})