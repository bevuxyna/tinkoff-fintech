const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x = 0;

rl.on("close", () => {
    console.log(x);
    process.exit(0);
});

rl.on('line', function (n) {
    x = Math.ceil(Math.log2(Number(n)));
    rl.close();
});