const readline = require("readline")
const toshow = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

toshow.question("Please enter your name:", (ans) => {
    console.log('HELLO ' + ans)
    toshow.close()
})