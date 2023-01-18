const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;

rl.on("close", () => {
    console.log(total);
    process.exit(0);
});

rl.on('line', function(data) {
    data = data.split(' ').map(Number);

    const a = data[0];
    const b = data[1];
    const c = data[2];
    const d = data[3];

    (b >= d) ? total = a : total = a + (d - b)*c;

    rl.close();
});
