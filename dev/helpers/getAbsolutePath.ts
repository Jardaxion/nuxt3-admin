import {resolve} from 'path';

export default function getAbsolutePath(): string{
    return resolve('package.json').replace('package.json', '');
}