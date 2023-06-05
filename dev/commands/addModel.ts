let fs = require('fs');
let absPath = require('../helpers/getAbsolutePath');

//get absolute path
let absolutePath: String = absPath.getAbsolutePath();

//name for model
let modelName: String | undefined = process.env.npm_config_name;

// check is have model a name
if(modelName == undefined){
    throw new Error('Error! You need to name your model(--name="modelname")');
};

//check is name have a space
if(modelName.includes(' ')){
    throw new Error('Error! Model name must not contain spaces')
}

//Get path
let pathModel: String = absolutePath +  "/app/models/" + modelName + '.ts';

//Check is file exist
if(fs.existsSync(pathModel)){
    throw new Error('Error! Model with this name already exist!');
} 

let template: String = `import { Model } from "~/dev/classes/Model";

export class `+ modelName  + ` extends Model{

}`;

fs.appendFileSync(pathModel, template);

console.log('Model was created!');