import * as fs from 'fs';

export const deleteDirectory = (path: string) => {
  if (fs.existsSync(path)){
    fs.rmdirSync(path, {recursive: true})
    console.log(`Directory deleted: ${path}`)
  } else {
    console.log('Directory does not exist')
  }
}