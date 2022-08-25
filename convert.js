const fs = require('fs');

const content = fs.readFileSync('KEN_ALL.CSV').toString()

const zipMap = {}
const prefMap = {}
content.split('\n').map(line => {
  const s = line.replace(/"/g, '').split(',')
  console.log(s[2], s[6], s[7]);
  
  if (!s[2]) return
  zipMap[s[2]] = {
    p: s[6],
    c: s[7]
  }

  if (!prefMap[s[6]]) prefMap[s[6]] = []
  if (!prefMap[s[6]].includes(s[7])) prefMap[s[6]].push(s[7])
})

fs.writeFileSync('zip2address.json', JSON.stringify(zipMap, null, 2))
fs.writeFileSync('prefecture.json', JSON.stringify(prefMap, null, 2))