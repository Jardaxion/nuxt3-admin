import {Command} from 'commander';
import fs from 'fs';
import {resolve} from 'path';
import colors from 'colors';

let program = new Command();

program.argument('<ControllerName>', 'Name for controller')
    .action((controllerName) => {
        //get absolute path
        let absolutePath: string = resolve('package.json').replace('package.json', '');

        //check is name have a space
        if(controllerName.includes(' ')){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller name must not contain spaces');
            process.exit();
        };

        //Get path
        let pathController: any = absolutePath +  "app/controllers/" + controllerName + '.ts';

        //Check is file exist
        if(fs.existsSync(pathController)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller with this name already exist!');
            process.exit();
        } 

        let template: string = `import { Controller } from "~/dev/classes/Controller";

export class `+ controllerName  + ` extends Controller{

}`;

        fs.appendFileSync(pathController, template);

        console.log('Controller was created!');
});

program.parse(process.argv);