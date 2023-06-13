import {Command} from 'commander';
import fs from 'fs';
import {resolve} from 'path';
import colors from 'colors';

let program = new Command();

program
    .argument('<modelName>', 'Name for model')
    .option('-m, --migraiton', 'Add migration to model', false)
    .action((modelName) => {
        //get absolute path
        let absolutePath: string = resolve('package.json').replace('package.json', '');

        //check is name have a space
        if(modelName.includes(' ')){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Model name must not contain spaces');
            process.exit();
        };

        //Get path
        let pathModel: any = absolutePath +  "app/models/" + modelName + '.ts';

        //Check is file exist
        if(fs.existsSync(pathModel)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Model with this name already exist!');
            process.exit();
        } 

        let template: string = `import { Model } from "~/dev/classes/Model";

export class `+ modelName  + ` extends Model{

}`;

        fs.appendFileSync(pathModel, template);

        console.log('Model was created!');
        console.log("The model was created in the directory: " + pathModel);
    })

program.parse(process.argv);