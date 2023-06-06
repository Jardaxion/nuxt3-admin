import {Command} from 'commander';
import fs from 'fs';
import {resolve} from 'path';
import colors from 'colors';

let program = new Command();

program.argument('<CommandName>', 'Name of command need to delete')
    .action((commandName) => {
        //get absolute path
        let absolutePath: string = resolve('package.json').replace('package.json', '');

        //Get path
        let pathCommand: any = absolutePath +  "app/commands/" + commandName + '.ts';

        //Check is file exist
        if(!fs.existsSync(pathCommand)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Command is not exist');
            process.exit();
        } 

        //Delete file
        fs.unlinkSync(pathCommand);

        console.log(colors.yellow('Command was deleted'));
        console.log("Don't forget to delete the line in package.json");
});

program.parse(process.argv);