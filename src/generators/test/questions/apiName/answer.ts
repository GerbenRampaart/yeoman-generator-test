import { Answers } from 'inquirer';
export const Key = 'apiName';

export class ApiNameAnswer implements Answers {
    apiName!: string;
}
