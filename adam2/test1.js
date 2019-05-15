const fs = require('fs')

const directories = source => fs.readdirSync(source, {
   withFileTypes: true
}).reduce((a, c) => {
   a.push({title:`this is ${c.name.split('.')[0]}`, slug:c.name.split('.')[0]})
   return a
}, [])

console.log(directories(__dirname.concat('/docs')))