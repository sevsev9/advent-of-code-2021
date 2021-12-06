require('fs/promises').readFile('./input.txt').then(data => data.toString().split('\n').map(e => e.split('').map(e => +e))).then(data => {
    data.splice(data.length - 1, 1);
    function fv(arr, depth = 0, mcb = true) {
        return (arr.length === 1) ? arr : fv(arr.filter(e => e[depth] ===  (arr.reduce((a, c) => a + c[depth], 0) >= (arr.length / 2) ^ !mcb)), ++depth, mcb)
    }
    return [fv(data), fv(data, 0, false)];
}).then(arr => arr.map(arr => parseInt(arr.toString().replaceAll(',', ''), 2)).reduce( (a, c) => a * c, 1)).then(console.log)
