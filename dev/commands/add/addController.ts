import {Command} from 'commander';
import fs from 'fs';
import colors from 'colors';
import getAbsolutePath from '../../helpers/getAbsolutePath.js';

let program = new Command();

program.argument('<ControllerName>', 'Name for controller')
    .action((controllerName) => {
        //get absolute path
        let absolutePath: string = getAbsolutePath();

        //check is name have a space
        if(controllerName.includes(' ')){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller name must not contain spaces');
            process.exit();
        };

        //Get path
        let pathController: string = absolutePath +  "app/controllers/" + controllerName + '.ts';

        //Check is file exist
        if(fs.existsSync(pathController)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Controller with this name already exist!');
            process.exit();
        } 

        let template: string = `import { Controller } from "../../dev/classes/Controller";

export class `+ controllerName  + ` extends Controller{

}`;

        fs.appendFileSync(pathController, template);

        console.log(colors.green('Controller was created!'));
        console.log("The controller was created in the directory: " + pathController);
});

program.parse(process.argv);