import {Command} from 'commander';
import fs from 'fs';
import {resolve} from 'path';
import colors from 'colors';

let program = new Command();

program.argument('<ModelName>', 'Name of model need to remove')
    .action((modelName) => {
        //get absolute path
        let absolutePath: string = resolve('package.json').replace('package.json', '');

        //Get path
        let pathModel: any = absolutePath +  "app/models/" + modelName + '.ts';

        //Check is file exist
        if(!fs.existsSync(pathModel)){
            console.error(colors.red('Error!'));
            console.log('');
            console.error('Model is not exist');
            process.exit();
        } 

        //Delete file
        fs.unlinkSync(pathModel);

        console.log(colors.yellow('Model was deleted'));
});

program.parse(process.argv);