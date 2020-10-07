import { Answers } from 'inquirer';
export const Key = 'apiMajorVersion';

export class ApiMajorVersionAnswer implements Answers {
    apiMajorVersion!: number;
}
