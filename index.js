const fs = require('fs');
module.exports = () => {
    const performaceCheckerStart = Date.now()
    const { exec } = require("child_process");
    const commands = process.argv.slice(2);
    if(commands.length == 0){
        console.log("\nUsage: compile [c/c++ source file]\n")
    }else{
        const source = commands[0].split('.').length === 1? fs.existsSync(`${commands[0]}.cpp`)? `${commands[0]}.cpp`:`${commands[0]}.c`: commands[0];
        const output = commands[1] ? commands[1]: `${source.split('.').slice(0, -1)}.exe`;
        exec(`g++ ${source} -o ${output}`, (err, stdout, stderr) => {
            if(err) throw new Error(err.message)
            else if(stderr) throw new Error(stderr)
            else{
                console.log(`\nSuccessfully convert ${source} to ${output} within ${(Date.now() - performaceCheckerStart)}ms\n`)
            }
        })
    }
}