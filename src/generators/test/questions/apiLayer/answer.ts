import { Answers } from 'inquirer';
export const Key = 'apiLayer';

export class ApiLayerAnswer implements Answers {
    apiLayer!: string;
}
