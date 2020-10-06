import { Answers } from 'inquirer';
export const LayerChoiceKey = 'apiLayer';

export class ApiLayerAnswer implements Answers {
    apiLayer!: string;
}
