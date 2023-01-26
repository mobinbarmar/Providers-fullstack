let fs = require('fs');

let total = 0

// I/O Cycle
fs.readFile('./index.js', () => {
    setTimeout(() => {
        print()
    }, 0);
    setImmediate(print2)
})

let n = 1

function print(){
    total = n * 10
    console.log('Total: ',total);
    n++
}
function print2(){
    total = n * 10
    console.log('Total: ',total);
}