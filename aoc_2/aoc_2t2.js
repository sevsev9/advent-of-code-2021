require('fs/promises')
    .readFile('input.txt')
    .then(buf => buf.toString().split('\n'))
    .then(data => data.reduce((acc, curr) => {
        (curr.startsWith('f')) ? (() => {
            acc[0] += curr.slice(-1) - 0;
            acc[1] += acc[2] * (curr.slice(-1) - 0)
        })()
            : acc[2] += (
                (curr.startsWith('u')) ? 0 - curr.slice(-1)
                    : curr.slice(-1) - 0
            );
        return acc;
        }, [0, 0, 0]))
    .then(arr => arr[0] * arr[1])
    .then(console.log)
