module.exports = () => {
    const { exec } = require("child_process");
    const commands = process.argv.slice(2);
    const source = commands[0].split('.').length === 1? `${commands[0]}.cpp`: commands[0];
    const output = commands[1] ? commands[1]: `${source.split('.').slice(0, -1)}.exe`;
    exec(`g++ ${source} -o ${output}`, (err, stdout, stderr) => {
        if(err) throw new Error(err.message)
        else if(stderr) throw new Error(stderr)
        else{
            if(stdout) console.log(stdout)
            exec(output, (err, stdout, stderr) => {
                if(err) throw new Error(err.message)
                else if(stderr) throw new Error(stderr)
                else console.log(stdout)
            })
        }
    })
}