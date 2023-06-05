import {resolve} from 'path';

export function getAbsolutePath(): string{
    return resolve('package.json').replace('package.json', '');
}