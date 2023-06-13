import {Command} from 'commander';
import fs from 'fs';
import {resolve} from 'path';
import colors from 'colors';

let program = new Command();

program.argument('<ControllerName>', 'Name of controller need to delete')
    .action((controllerName) => {
        //get absolute path
        let absolutePath: string = resolve('package.json').replace('package.json', '');

        //Get path
        let pathController: string = absolutePath +  "app/controllers/" + controllerName + '.ts';

        //Check is file exist
        if(!fs.existsSync(pathController)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller is not exist');
            process.exit();
        } 

        //Delete file
        fs.unlinkSync(pathController);

        console.log(colors.yellow('Controller was deleted'));
});

program.parse(process.argv);