require('fs/promises').readFile('./input.txt').then(data => data.toString().split(',').map(e => +e)).then(arr => Math.min(...arr.map(sol => arr.reduce( (acc, curr) => acc + Math.abs(sol - curr), 0)))).then(console.log)
