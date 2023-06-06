import {Command} from 'commander';

let program = new Command();

program.argument('<Test>', 'description')
    .option('-f, --fullname', 'description', 'default value(maybe bool, string, number etc.)')
    .action((Test) => {

});
        
program.parse(process.argv);