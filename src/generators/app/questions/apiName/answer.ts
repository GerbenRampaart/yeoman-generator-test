import { Answers } from 'inquirer';
export const NameChoiceKey = 'apiName';

export class ApiNameAnswer implements Answers {
    apiName!: string;
}
