import {Command} from 'commander';
import fs from 'fs';
import colors from 'colors';
import getAbsolutePath from '../../helpers/getAbsolutePath.js';

let program = new Command();

program.argument('<CommandName>', 'Name for command')
    .action((CommandName) => {
        //get absolute path
        let absolutePath: string = getAbsolutePath();

        //check is name have a space
        if(CommandName.includes(' ')){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller name must not contain spaces');
            process.exit();
        };

        //Get path
        let pathCommand: string = absolutePath +  "app/commands/" + CommandName + '.ts';

        //Check is file exist
        if(fs.existsSync(pathCommand)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller with this name already exist!');
            process.exit();
        }

        let template = `import {Command} from 'commander';

let program = new Command();

program.argument('<`+CommandName+`>', 'description')
    .option('-f, --fullname', 'description', 'default value(maybe bool, string, number etc.)')
    .action((`+CommandName+`) => {

});
        
program.parse(process.argv);`;

        fs.appendFileSync(pathCommand, template);

        console.log(colors.green('Command file was created!'));
        console.log("The command was created in the directory: " + pathCommand);
        console.log('');
        console.log(colors.yellow('Warning!'));
        console.log('To activate the command, add to scripts in package.json:');
        console.log('"'+CommandName+'": "npx ts-node --esm app/commands/'+CommandName +'.ts"');
        console.log('In the first value, you can enter any name that suits you');
        console.log('');
        console.log(colors.yellow('Documentations for commander: ')+ 'https://www.npmjs.com/package/commander');
});

program.parse(process.argv);